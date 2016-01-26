<?php

namespace App\Http\Controllers;

use App\Models\Employee;

class EmployeeController extends Controller
{
   
    public function get($code)
    {

        return Employee::find($code)->first();
    
    }

}