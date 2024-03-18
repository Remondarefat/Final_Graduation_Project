<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiAuthController;
use App\Http\Controllers\ApiHotelController;
use App\Http\Controllers\RoomController;use App\Http\Controllers\ApiHotelDescController;
use App\Http\Controllers\ApiHotelRoomController;

use App\Http\Controllers\UserController;
Route::post('/hotels', [ApiHotelController::class, 'store']);

Route::post('/addroom' , [RoomController::class, 'store']);
Route::get('/hotels' , [ApiHotelController::class, 'index']);

Route::get('/booking-data', 'App\Http\Controllers\ApiController@getBookingData');
Route::get('/userdata/{id}', [UserController::class, 'show']); 
Route::put('/editprofile/{id}', [UserController::class, 'update']);
// !------ HotelDesc & Login -Logout---------
Route::get('/hoteldesc', [ApiHotelDescController::class, 'show']);
Route::get('/hotelroom', [ApiHotelRoomController::class, 'show']);

//----------------------- Login &logout-------------------
Route::group(['middleware' => ['api-auth']], function () {
    Route::post('/logout', [ApiAuthController::class, 'logout']);
});

Route::post('/login', [ApiAuthController::class, 'login']);