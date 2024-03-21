<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use App\Models\User;
use App\Models\Room;
use App\Models\Hotel;
class BookController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //load the related data from the User, Hotel, and Room models
        $books = Book::with(['user', 'hotel', 'room'])->get();
        foreach ($books as $book) {
            $book->username = $book->user->name;
            $book->hotel_name = $book->hotel->name;
            $book->room_type = $book->room->type;
        }

        return response()->json($books);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $data = request()->validate([
            'checkin' => 'required|date',
            'checkout' => 'required|date',
            'total_due' => 'required|numeric',
            'room_id' => 'required',
            'user_id' => 'required',
            'hotel_id' => 'required',
            'meals' => 'nullable',
        ]);
        $book = Book::create($data);
        Room::find($data['room_id'])->update(['status' => 'booked']);
        return response()->json(['message' => 'Book saved successfully']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
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
