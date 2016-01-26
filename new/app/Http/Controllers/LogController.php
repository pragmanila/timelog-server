<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\Contracts\NotifierContract as Notifier;

use App\Models\Employee;
use App\Models\Log;

class LogController extends Controller
{
   
    public function log(Request $request, Notifier $notifier, $code)
    {

        # Check if there is a running log
        $current = Log::where('employee_code', $code)->where('image_out', '')->first();
        $image = $request->get('image');

        if(empty($current)) {

            # Create time in
            $log = new Log(['image_in' => $image]);
            Employee::where('code', $code)->first()->logs()->save($log);

            $notifier->in($log);
        
        }
        else {

            # Create time out
            $log = Log::where('id', $current->id)->first();
            $log->image_out = $image; 
            $log->save();

            $notifier->out($log);

        }

        return $log;
    
    }

}