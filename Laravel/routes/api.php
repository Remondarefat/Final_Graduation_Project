<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiHotelController;
use App\Http\Controllers\RoomController;
Route::post('/hotels', [ApiHotelController::class, 'store']);

Route::post('/addroom' , [RoomController::class, 'store']);

Route::get('/booking-data', 'App\Http\Controllers\ApiController@getBookingData');
