<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {

        $this->app->bind('App\Services\Contracts\NotifierContract', 'App\Services\Implementations\Notifier\Slack');
        $this->app->bind('App\Services\Contracts\ImageUploaderContract', 'App\Services\Implementations\ImageUploader\Dropbox');
    
    }

}
