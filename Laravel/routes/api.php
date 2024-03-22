<?php

use App\Models\HotelImage;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserController;
use App\Http\Controllers\ApiAuthController;
use App\Http\Controllers\ApiHotelController;
use App\Http\Controllers\ApiReviewController;

use App\Http\Controllers\ApiHotelRoomController;
use App\Http\Controllers\ApiHotelDescController;
use App\Http\Controllers\HotelController;
use App\Http\Controllers\BookController;
Route::post('/hotels', [ApiHotelController::class, 'store']);
//add room routes
Route::post('/addroom' , [RoomController::class, 'store']);
Route::get('/hotels/{hotelId}' ,'App\Http\Controllers\HotelController@getHotelNames');
Route::get('/hotels' , [ApiHotelController::class, 'index']);

Route::get('/booking-data', 'App\Http\Controllers\ApiController@getBookingData');

Route::get('/profile/{id}', [ProfileController::class, 'show']);
Route::get('/userdata/{id}', [UserController::class, 'show']);
Route::put('/editprofile/{id}', [UserController::class, 'update']);
//checkout api
Route::get('hotels/{hotelId}/details/{roomId}', [HotelController::class, 'show']);
Route::post('/checkout', [BookController::class, 'create']);
// admin request
Route::get('/request' , [BookController::class, 'index']);
// !------ HotelDesc & Login -Logout---------
Route::get('/hoteldesc/{id}', [ApiHotelDescController::class, 'show']);
Route::get('/room/{roomId}', [ApiHotelRoomController::class, 'show']);
// !----- Get & post Review ----------------
Route::post('/reviews', [ApiReviewController::class, 'store']);
Route::get('/reviews/{hotelId}', [ApiReviewController::class, 'getReviewsByHotelId']);
Route::get('/reviews', [ApiReviewController::class, 'index']);
//----------------------- Login &logout-------------------
Route::group(['middleware' => ['api-auth']], function () {
    Route::post('/logout', [ApiAuthController::class, 'logout']);
});

Route::post('/login', [ApiAuthController::class, 'login']);

Route::get('hotels/{id}', [ApiHotelController::class, "show"]);
Route::put('hotels/{id}', [ApiHotelController::class, "update"]);

Route::get('/showhotels', [HotelController::class, 'index']);