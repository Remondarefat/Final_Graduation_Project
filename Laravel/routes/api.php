<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ApiHotelController;

Route::post('/hotels', [ApiHotelController::class, 'store']);
