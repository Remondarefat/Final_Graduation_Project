<?php

namespace App\Http\Controllers;

use App\Models\Room;
use Illuminate\Http\Request;

class ApiHotelRoomController extends Controller
{
    public function show($roomId)
    {
        $room = Room::findOrFail($roomId);
        return response()->json(['room' => $room]);
    }
}

