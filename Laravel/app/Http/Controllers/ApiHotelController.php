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
            'name' => 'string|required',
            'location' => 'string|required',
            'description' => 'string|required',
            'region' => 'string|required',
            'stars' => 'integer|required',
            'image' => 'required',
            'image.*' => 'required|image|mimes:jpeg,png,jpg,gif|max:2048',

        ]);
        $hotel=Hotel::create($data);

        foreach ($request->file( 'image') as $image) {
           $filename= $image->getClientOriginalName();
           $image->move('images', $filename);
           HotelImage::create([
               'image' => $filename,
               'hotel_id' => $hotel->id,
           ]);
        }



            return response()->json(['success' => 'hotel created successfully']);
    }
    public function show(string $id)
    {
        $category=Hotel::findOrFail($id);

        return new HotelResource($category);
    }

    public function update(Request $request, string $id)
    {
        $data=$request->validate([
            'name' => 'string|required',
            'location' => 'string|required',
            'description' => 'string|required',
            'stars' => 'integer|required',
        ]);
        $hotel=Hotel::findOrFail($id);
        $hotel->update($data);
        return response()->json(['success' => 'hotel updated successfully']);
    }

}
