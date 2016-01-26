<?php

$app->get('employee/{code}', 'EmployeeController@get');
$app->post('log/{code}', 'LogController@log');
