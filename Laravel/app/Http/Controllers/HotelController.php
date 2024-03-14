<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HotelController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $followings = Auth::user()->followings;
        $posts = Post::whereIn('user_id', $followings->pluck('id'))
        ->latest()
        ->get();
        $comments=Comment::all();
        $commentlike=CommentLike::all();
        $userid = Auth::user()->id;
        $like = Like::where('user_id', Auth::user()->id)->get();
        return view('posts.home', ['commentlike'=>$commentlike,'posts' => $posts, 'like' => $like, 'userid' => $userid,'comments'=>$comments]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'caption' => 'string',
            'hashtag_name' => 'string|nullable',
            'croppedImageDataUrls.*' => 'required',
            'videoDataUrls.*' => 'required',
        ]);
        $post = new Post();
        $post->caption = $request->caption;
        $post->user_id = Auth::user()->id;
        $post->save();
        foreach ($croppedImageDataUrls as $imageDataUrl) {
            // Remove the data URI scheme from the image URL
            $imageDataUrl = preg_replace('#^data:image/\w+;base64,#i', '', $imageDataUrl);
            // Decode the base64-encoded image data into binary data
            $imageData = base64_decode($imageDataUrl);
            // Generate a unique filename for the image

            $filename = uniqid() . '.png';
            // Store the image data directly in the storage directory
            $path = Storage::put('public/images/' . $filename, $imageData);

            $path = str_replace('public/', 'storage/', $path);

            // Save the image path to the database
            $media = new Media();
            $media->media_url = $filename;
            $media->post_id = $post->id;
            $media->save();
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
