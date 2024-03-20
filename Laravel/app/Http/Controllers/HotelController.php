<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Hotel;
use App\Models\HotelImage;
use App\Models\Room;
use App\Models\RoomImage;
class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {

    }

    public function store(Request $request)
    {
        // $request->validate([
        //     'caption' => 'string',
        //     'hashtag_name' => 'string|nullable',
        //     'croppedImageDataUrls.*' => 'required',
        //     'videoDataUrls.*' => 'required',
        // ]);
        // $post = new Post();
        // $post->caption = $request->caption;
        // $post->user_id = Auth::user()->id;
        // $post->save();
        // foreach ($croppedImageDataUrls as $imageDataUrl) {
        //     // Remove the data URI scheme from the image URL
        //     $imageDataUrl = preg_replace('#^data:image/\w+;base64,#i', '', $imageDataUrl);
        //     // Decode the base64-encoded image data into binary data
        //     $imageData = base64_decode($imageDataUrl);
        //     // Generate a unique filename for the image

        //     $filename = uniqid() . '.png';
        //     // Store the image data directly in the storage directory
        //     $path = Storage::put('public/images/' . $filename, $imageData);

        //     $path = str_replace('public/', 'storage/', $path);

        //     // Save the image path to the database
        //     $media = new Media();
        //     $media->media_url = $filename;
        //     $media->post_id = $post->id;
        //     $media->save();
        // }
    }

    /**
     * Display the specified resource.
     */
    public function show(string $hotelId, string $roomId)
    {
        $hotel = Hotel::findOrFail($hotelId);

        $hotel->images = HotelImage::where('hotel_id', $hotelId)->get();
    
        $room = Room::where('hotel_id', $hotelId)
            ->where('id', $roomId)
            ->first();
    
        if (!$room) {
            return response()->json(['error' => 'Room not found'], 404);
        }
    
        $room->images = RoomImage::where('room_id', $roomId)->get();
        $hotel->room = $room;
    
        return response()->json($hotel);
    }
    

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function getHotelNames(string $hotelId) {
        $hotel = Hotel::findOrFail($hotelId);
        $hotel->images = HotelImage::where('hotel_id', $hotelId)->get();
        return response()->json($hotel);

    }
}
