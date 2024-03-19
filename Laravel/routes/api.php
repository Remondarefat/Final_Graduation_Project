<?php

use App\Models\HotelImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiHotelController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\BookController;
Route::post('/hotels', [ApiHotelController::class, 'store']);

Route::post('/addroom' , [RoomController::class, 'store']);
Route::get('/hotels' , [ApiHotelController::class, 'index']);

Route::get('/booking-data', 'App\Http\Controllers\ApiController@getBookingData');
Route::get('/userdata/{id}', [UserController::class, 'show']); 
Route::put('/editprofile/{id}', [UserController::class, 'update']);
//checkout api
Route::get('hotels/{hotelId}/details/{roomId}', [HotelController::class, 'show']);
Route::post('/checkout', [BookController::class, 'create']);