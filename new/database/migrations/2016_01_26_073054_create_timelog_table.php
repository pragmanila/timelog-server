<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTimelogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        
        Schema::create('timelog', function (Blueprint $table) {
            
            $table->increments('id');
            $table->char('employee_code', 4);
            $table->longText('image_in');
            $table->longText('image_out');
            $table->nullableTimestamps();

            $table->foreign('employee_code')->references('code')->on('employee');

        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
