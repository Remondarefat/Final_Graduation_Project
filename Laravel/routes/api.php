<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiAuthController;
use App\Http\Controllers\ApiHotelController;
use App\Http\Controllers\ApiHotelDescController;
use App\Http\Controllers\ApiHotelRoomController;

Route::post('/hotels', [ApiHotelController::class, 'store']);
// !------ HotelDesc & Login -Logout---------
Route::get('/hoteldesc', [ApiHotelDescController::class, 'show']);
Route::get('/hotelroom', [ApiHotelRoomController::class, 'show']);

//----------------------- Login &logout-------------------
Route::group(['middleware' => ['api-auth']], function () {
    Route::post('/logout', [ApiAuthController::class, 'logout']);
});
Route::post('/login', [ApiAuthController::class, 'login']);