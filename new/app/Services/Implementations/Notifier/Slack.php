<?php namespace App\Services\Implementations\Notifier;

use App\Models\Employee;

class Slack implements \App\Services\Contracts\NotifierContract
{

	public function in($log) 
	{

		$uploader = app()->make('App\Services\Contracts\ImageUploaderContract');
		$image_url = $uploader->upload($log->employee_code.'-in-'.time().'.jpg', $log->image_in);
		$this->request('in', $this->getEmployeeName($log->employee_code), $image_url);

	}

	public function out($log) 
	{

		$uploader = app()->make('App\Services\Contracts\ImageUploaderContract');
		$image_url = $uploader->upload($log->employee_code.'-out-'.time().'.jpg', $log->image_out);
		$this->request('out', $this->getEmployeeName($log->employee_code), $image_url);
		
	}

	private function getEmployeeName($code)
	{

		$employee = Employee::find($code)->first();
		return $employee->first_name . ' ' . $employee->last_name;

	}

	private function request($type, $username, $image_url)
	{

		$data = [
			'username' => $username,
		    'text' => 'Logging ' . $type,
		    'attachments' => [['image_url' => $image_url]]
		];

		$curl = curl_init();
		curl_setopt_array($curl, [
				CURLOPT_URL => env('SLACK_NOTIFY_URL'),
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_CUSTOMREQUEST => 'POST',
				CURLOPT_POSTFIELDS => json_encode($data),
				CURLOPT_HTTPHEADER => [
					'cache-control: no-cache',
					'content-type: application/json'
				],
			]
		);

		$response = curl_exec($curl);
		$err = curl_error($curl);

	}

}