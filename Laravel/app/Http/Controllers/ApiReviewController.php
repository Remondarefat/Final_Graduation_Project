<?php



namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Review;

class ApiReviewController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'feedback' => 'required|string',
            'rating' => 'required|numeric|min:1|max:5',
            'hotel_id' => 'required|exists:hotels,id',
    
        ]);

        $review = Review::create([
            'feedback' => $request->feedback,
            'rating' => $request->rating,
            'hotel_id' => $request->hotel_id,
        
        ]);

        return response()->json(['message' => 'Review submitted successfully', 'review' => $review], 201);
    }
    public function getReviewsByHotelId($hotelId)
    {
        $reviews = Review::where('hotel_id', $hotelId)->with('user')->get();

        $reviews->transform(function ($review) {
            $review->user->name = $review->user->fname . ' ' . $review->user->lname;
            return $review;
        });

        return response()->json($reviews);
    }

}

