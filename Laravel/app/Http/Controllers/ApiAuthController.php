<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use JWTAuth;
class ApiAuthController extends Controller
{

    public function login(Request $request)
{
    $data = $request->validate([
        'email' => 'required|email|max:255',
        'password' => 'required|string|min:5|max:30|',
    ]);

    if (!$token = JWTAuth::attempt($data)) {
        return response()->json(['error_msg' => 'Invalid credentials'], 401);
    }

    $user = auth()->user();

    if ($user->email === 'Admin@1234.com' && $user->password === bcrypt('Admin@1234')) {
        // Admin login
        return response()->json([
            'access_token' => $token,
            'success_msg' => 'Logged in successfully as admin!',
            'is_admin' => true,
        ]);
    }

    // Regular user login
    return response()->json([
        'access_token' => $token,
        'success_msg' => 'Logged in successfully!',
        'is_admin' => false,
    ]);
}
    

    public function logout(Request $request){
        $accessToken= $request->header('Access-Token');
        User::where('access_token' ,$accessToken)->first()->update([
            'access_token' =>null ,
        ]);

        return response()->json([

            'success_msg' =>'Logged  Out Successfully',
        ]);
    }
}
