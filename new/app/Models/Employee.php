<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Employee extends Model
{

    protected $table = 'employee';
    protected $primaryKey = 'code';
    public $incrementing = false;
    public $timestamps = false;

    public function logs()
    {
        return $this->hasMany('App\Models\Log', 'employee_code', 'code');
    }

}