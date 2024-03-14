<?php

namespace App\Http\Controllers;

use App\Models\Hotel;
use App\Models\HotelImage;

use Illuminate\Http\Request;

class ApiHotelController extends Controller
{
    // public function index()
    // {
    //     $followings = Auth::user()->followings;
    //     $posts = Post::whereIn('user_id', $followings->pluck('id'))
    //     ->latest()
    //     ->get();
    //     $comments=Comment::all();
    //     $commentlike=CommentLike::all();
    //     $userid = Auth::user()->id;
    //     $like = Like::where('user_id', Auth::user()->id)->get();
    //     return view('posts.home', ['commentlike'=>$commentlike,'posts' => $posts, 'like' => $like, 'userid' => $userid,'comments'=>$comments]);
    // }
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
               'hotel_id' => 2,
           ]);
        }



            return response()->json(['success' => 'hotel created successfully']);
    }
}
