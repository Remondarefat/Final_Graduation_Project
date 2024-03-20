<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use Illuminate\Http\Request;
use App\Http\Resources\HotelResource;

class ApiHotelDescController extends Controller
{
    public function show($id)
    {
        $hotel = Hotel::with('images', 'rooms.images')->find($id);

        if (!$hotel) {
            return response()->json(['error' => 'Hotel not found'], 404);
        }

        return new HotelResource($hotel);
    }
}

