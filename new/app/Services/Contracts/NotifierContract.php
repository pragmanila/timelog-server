<?php namespace App\Services\Contracts;

interface NotifierContract
{

	public function in($log);
	public function out($loge);

}