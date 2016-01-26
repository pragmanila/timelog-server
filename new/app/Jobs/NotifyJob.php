<?php

namespace App\Jobs;

class NotifyJob extends Job
{

    private $log = null;
    private $notifier = null;

    public function __construct($log)
    {
    
        $this->notifier = app()->make('App\Services\Contracts\NotifierContract');
        $this->log = $log;
    
    }

    public function handle()
    {

        if(empty($this->log->image_out)) {
            $this->notifier->in($this->log);
        }
        else {
            $this->notifier->out($this->log);
        }

    }

}