<?php

$app->get('employee/{code}', 'EmployeeController@get');
$app->post('employee/{code}/log', 'LogController@log');
