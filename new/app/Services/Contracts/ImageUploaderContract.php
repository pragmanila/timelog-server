<?php namespace App\Services\Contracts;

interface ImageUploaderContract
{

	public function upload($filename, $data);

}