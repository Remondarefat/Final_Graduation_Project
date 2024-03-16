<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\RoomResource;

class ApiHotelRoomController extends Controller
{
    public function show(){

        return new RoomResource();

    }
}
