<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Resources\HotelResource;

class ApiHotelDescController extends Controller
{
    public function show(){



        return new HotelResource();
    }
}
