<?php namespace App\Services\Implementations\ImageUploader;

class Dropbox implements \App\Services\Contracts\ImageUploaderContract
{

	private $auth = '';

	public function __construct() {

		$this->auth = env('DROPBOX_AUTH');

	}

	public function upload($filename, $data) {

		$curl = curl_init();

		curl_setopt_array($curl, [
			CURLOPT_URL => "https://api.dropboxapi.com/1/save_url/auto/public/".$filename,
			CURLOPT_RETURNTRANSFER => true,
			CURLOPT_CUSTOMREQUEST => "POST",
			CURLOPT_POSTFIELDS => "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"url\"\r\n\r\n".$data."\r\n-----011000010111000001101001--",
			CURLOPT_HTTPHEADER => [
					"authorization: Bearer " . $this->auth,
					"cache-control: no-cache",
					"content-type: multipart/form-data; boundary=---011000010111000001101001",
				]
			]
		);

		$response = curl_exec($curl);
		$err = curl_error($curl);
		curl_close($curl);
		
		return 'https://dl.dropboxusercontent.com/u/15296423/'.$filename;

	}

}