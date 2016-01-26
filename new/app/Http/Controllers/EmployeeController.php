<?php

namespace App\Http\Controllers;

use App\Models\Employee;

class EmployeeController extends Controller
{
   
    public function get($code)
    {

    	header('Access-Control-Allow-Origin:*');

        return Employee::where('code', $code)->first();
    
    }

}