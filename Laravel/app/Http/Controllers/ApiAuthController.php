<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Support\Str;
use Illuminate\Http\Request;

class ApiAuthController extends Controller
{

    public function login(Request $request){
        $data=$request->validate([
            'email'=>'required|email|max:255',
            'password'=>'required|string|min:5|max:30|',
        ]);
        $isLogin=Auth::attempt(['email'=>$data['email'],'password'=>$data['password']]);
        if( !$isLogin ){
            return response()->json([
                'error_msg'=>'Credentials not correct!',
            ]);
        }

        $accessToken=Str::random(64) ;

        auth()->user()->update([
            'access_token' =>$accessToken ,
        ]);
        
        return response()->json([
            'access_token' =>$accessToken ,
            "success_msg" => "Logged in successfully!" , 
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
