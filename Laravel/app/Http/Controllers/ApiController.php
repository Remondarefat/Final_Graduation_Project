<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;
use App\Models\HotelImage;
use App\Models\Room;
use App\Models\RoomImage;

class ApiController extends Controller
{
    public function getBookingData()
    {
        $jsonData = file_get_contents(storage_path('jsondata/sinaiData.json'));
        $data = json_decode($jsonData, true); 
        foreach ($data as $item) {
            Hotel::create([
                'name' => $item['name'],
                'location' => $item['location'],
                'stars' => $item['stars'],
                'rate' => $item['rate'],
                'description' => $item['description'],
            ]);
            foreach ($item['images'] as $imageUrl) {
                HotelImage::create([
                    'hotel_id' => $item->id,
                    'image' => $imageUrl
                ]);
           
    }
}
        return response()->json($jsonData);
    }
}
