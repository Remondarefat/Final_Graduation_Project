<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\HotelImage;
use App\Http\Resources\HotelResource;

use Illuminate\Http\Request;

class ApiHotelController extends Controller
{
    public function index()
    {
        $hotels = Hotel::with('images','rooms' ,'rooms.images')->get();
        return HotelResource::Collection($hotels);
    }
    public function store(Request $request)
    {
        // dd($request->all());

        $data=$request->validate([
            'name' => 'string',
            'location' => 'string',
            'description' => 'string',
            'stars' => 'integer',
            'image' => 'required',
            'image.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',

        ]);
        $hotel=Hotel::create($data);

        foreach ($request->file( 'image') as $image) {
           $filename= $image->getClientOriginalName();
           $image->move('storage/images', $filename);
           HotelImage::create([
               'image' => $filename,
               'hotel_id' => $hotel->id,
           ]);
        }



            return response()->json(['success' => 'hotel created successfully']);
    }

}
