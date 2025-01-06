FROM phpswoole/swoole:php8.1-alpine

COPY --from=mlocati/php-extension-installer /usr/bin/install-php-extensions /usr/local/bin/

RUN install-php-extensions pcntl bcmath inotify \ 
    && apk --no-cache add shadow sqlite mysql-client git patch \
    && addgroup -S -g 1000 www && adduser -S -G www -u 1000 www 
#复制项目文件以及配置文件
WORKDIR /www
COPY .docker /
COPY . /www
RUN composer install --optimize-autoloader --no-cache --no-dev \
    && php artisan storage:link \
    && chown -R www:www /www \
    && chmod -R 775 /www

CMD php artisan octane:start --server="swoole" --port=7010