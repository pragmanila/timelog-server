<?php

$app->get('employee/{code}', 'EmployeeController@get');
$app->post('employee/{code}/log', 'LogController@log');
$app->post('employee/{code}/test', 'LogController@test');
