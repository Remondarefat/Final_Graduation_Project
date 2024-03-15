<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use App\Models\RoomImage;
class RoomController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        try {
           $data= $request->validate([
                'price' => 'required|numeric',
                'view' => 'required|string',
                'type' => 'required|string',
                'image' => 'required',
                'image.*' => 'image|mimes:jpeg,png,jpg,gif|max:2048',
                'hotel_id' => 'required',
            ]);
    
            Room::create($data);


            foreach ($request->file('image') as $image) {
                $filename= $image->getClientOriginalName();
                $image->move('storage/room_images', $filename);
                RoomImage::create([
                    'image' => $filename,
                    'room_id' => 1,
                ]);
             }
    
            return response()->json(['message' => 'Room added successfully'], 201);
        } catch (\Exception $e) {
            \Log::error('Exception occurred: ' . $e->getMessage());
            return response()->json(['message' => $e->getMessage()], 500);
        }
    }
    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
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
}
