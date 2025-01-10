FROM phpswoole/swoole:php8.2-alpine

COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/
RUN install-php-extensions pcntl bcmath \ 
    && apk --no-cache add shadow sqlite mysql-client git patch supervisor redis \
    && addgroup -S -g 1000 www && adduser -S -G www -u 1000 www \
    && (getent group redis || addgroup -S redis) \
    && (getent passwd redis || adduser -S -G redis -H -h /data redis)

WORKDIR /www
COPY .docker /
COPY . /www
COPY .docker/supervisor/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

RUN composer install --optimize-autoloader --no-cache --no-dev \
    && php artisan storage:link \
    && chown -R www:www /www \
    && chmod -R 775 /www \
    && mkdir -p /data \
    && chown redis:redis /data
    
ENV ENABLE_WEB=false \
    ENABLE_HORIZON=false \
    ENABLE_REDIS=false 
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisor/conf.d/supervisord.conf"] 