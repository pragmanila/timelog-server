<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use App\Models\Employee;
use App\Models\Log;

use App\Jobs\NotifyJob;

class LogController extends Controller
{
   
    public function log(Request $request, $code)
    {

        header('Access-Control-Allow-Origin:*');

        # Check if there is a running log
        $current = Log::where('employee_code', $code)->where('image_out', '')->first();
        $image = $request->get('image');

        if(empty($current)) {

            # Create time in
            $log = new Log(['image_in' => $image]);
            Employee::where('code', $code)->first()->logs()->save($log);
        
        }
        else {

            # Create time out
            $log = Log::where('id', $current->id)->first();
            $log->image_out = $image; 
            $log->save();

        }

        $this->dispatch(new NotifyJob($log));
        return $log;
    
    }

    public function test(Request $request, $code)
    {
        header('Access-Control-Allow-Origin:*');
        return 'ok';
    }

}