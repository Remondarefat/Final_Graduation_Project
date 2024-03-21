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
        $jsonData = file_get_contents(storage_path('jsondata/nylaData.json'));
        $data = json_decode($jsonData, true);
        foreach ($data as $item) {
            $hotel=Hotel::create([
                'name' => $item['name'],
                'region' => $item['region'],
                'location' => $item['location'],
                'region' => $item['region'],
                'stars' => $item['stars'],
                'description' => $item['description'],
        ]);
        foreach ($item['images'] as $imageUrl) {
            HotelImage::create([
                'hotel_id' => $hotel->id,
                'image' => $imageUrl
            ]);

        }
        foreach ($item['rooms'] as $room) {
            $roomData=Room::create([
                'hotel_id' => $hotel->id,
                'type' => $room['type'],
                'description' => $room['description'],
                'view' => $room['view'],
                'price' => $room['price'],
            ]);
            foreach ($room['images'] as $imageUrl) {
                RoomImage::create([
                    'room_id' => $roomData->id,
                    'image' => $imageUrl
                ]);

            }


        }
        }

        return response()->json($jsonData);
    }
}
