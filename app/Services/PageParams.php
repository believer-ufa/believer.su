<?php

namespace App\Services;

class PageParams
{
    /**
     * Название набора скриптов и стилей для текущего шаблона.
     *
     * @var string
     */
    protected $assetTheme = 'coworking-places';

    /**
     * Отображать шапку сайта?
     *
     * @var bool
     */
    protected $showHeader = true;

    /**
     * Отображать комментарии?
     *
     * @var bool
     */
    protected $showComments = true;

    /**
     * Нужен ли рендер на стороне сервера?
     *
     * @var bool
     */
    protected $serverSideRender = false;

    /**
     * Включить адаптивную верстку?
     *
     * @var bool
     */
    protected $adaptiveMode = false;

    /**
     * Текущий путь активного пункта меню
     * @var string
     */
    protected $activeMenuPath = null;

    /**
     * На данной странице сайдар следует отключить?
     * @var type
     */
    protected $sidebarIsDisabled = false;

    /**
     * @param bool $value
     *
     * @return bool|null
     */
    public function showHeader($value = null)
    {
        if ($value === null) {
            return $this->showHeader;
        }

        $this->showHeader = (bool) $value;
    }

    /**
     * @param bool $value
     *
     * @return bool|null
     */
    public function showComments($value = null)
    {
        if ($value === null) {
            return $this->showComments;
        }

        $this->showComments = (bool) $value;
    }

    /**
     * @param bool $value
     *
     * @return bool|null
     */
    public function sidebarIsDisabled($value = null)
    {
        if ($value === null) {
            return $this->sidebarIsDisabled;
        }

        $this->sidebarIsDisabled = (bool) $value;
    }

    /**
     * @param bool $value
     *
     * @return bool|null
     */
    public function assetTheme($value = null)
    {
        if ($value === null) {
            return $this->assetTheme;
        }

        $this->assetTheme = $value;
    }

    /**
     * @param bool $value
     *
     * @return bool|null
     */
    public function serverSideRender($value = null)
    {
        if ($value === null) {
            return $this->serverSideRender;
        }

        $this->serverSideRender = $value;
    }

    /**
     * @param bool $value
     *
     * @return bool|null
     */
    public function adaptiveMode($value = null)
    {
        if ($value === null) {
            return $this->adaptiveMode;
        }

        $this->adaptiveMode = $value;
    }

    public function activeMenuPath($value = null)
    {
        if ($value === null) {
            return $this->activeMenuPath;
        }

        $this->activeMenuPath = $value;
    }

}
