<?php



namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use Illuminate\Support\Facades\Auth;

class ApiReviewController extends Controller
{
    public function index()
    {
        $reviews = Review::with('user')->get();
        return response()->json(['reviews' => $reviews], 200);
    }
    public function store(Request $request)
    {
        $request->validate([
            'feedback' => 'required|string',
            'rating' => 'required|numeric|min:1|max:5',
            'hotel_id' => 'required|exists:hotels,id',
        ]);
    
        // Get the authenticated user's ID
        try {
            $user = JWTAuth::parseToken()->authenticate();
        } catch (\Exception $e) {
            return response()->json(['status' => 401, 'message' => 'Unauthorized'],401);
        }
    
        $review = Review::create([
            'feedback' => $request->feedback,
            'rating' => $request->rating,
            'hotel_id' => $request->hotel_id,
            'user_id' => $user->id, // Associate the review with the authenticated user
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

