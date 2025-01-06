<?php

namespace App\Support;

use App\Models\Setting as SettingModel;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Fluent;

class Setting
{
    const CACHE_KEY = 'admin_settings';

    private $cache;
    public function __construct()
    {
        $this->cache = Cache::store('octane');
    }
    /**
     * 获取配置.
     *
     * @param  string  $key
     * @param  mixed  $default
     * @return mixed
     */
    public function get($key, $default = null)
    {
        return Arr::get($this->fromDatabase(), $key, $default);
    }

    /**
     * 设置配置信息.
     *
     * @param  array  $data
     * @return $this
     */
    public function set($key, $value = null): bool
    {
        if (is_array($value)) {
            $value = json_encode($value);
        }
        SettingModel::updateOrCreate(['name' => $key], ['value' => $value]);
        $this->cache->forget(self::CACHE_KEY);
        return true;
    }


    /**
     * 保存配置到数据库.
     *
     * @param  array  $data
     * @return $this
     */
    public function save(array $data = []): bool
    {
        foreach ($data as $key => $value) {
            $this->set($key, $value);
        }

        return true;
    }

    /**
     * 删除配置信息
     * 
     * @param string $key
     * @return bool
     */
    public function remove($key): bool
    {
        SettingModel::where('name', $key)->delete();
        $this->cache->forget(self::CACHE_KEY);
        return true;
    }

    /**
     * 获取配置信息.
     * @return array
     */
    public function fromDatabase(): array
    {
        try {
            return $this->cache->rememberForever(self::CACHE_KEY, function (): array {
                return SettingModel::pluck('value', 'name')->toArray();
            });
        } catch (\Throwable $th) {
            return [];
        }

    }
}
