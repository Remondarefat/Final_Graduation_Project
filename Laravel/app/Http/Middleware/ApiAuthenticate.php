<?php

namespace App\Http\Middleware;

use Closure;
use App\Models\User;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class ApiAuthenticate
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $accessToken=$request->header('Access-Token');
        if($accessToken !== null){

            $user=User::where('access_token' ,$accessToken)->first();
            if($user ==null){
                return response()->json([
                    'error_msg'=>'token not correct',
                ]);
            }
            return $next($request);
        }else{
            return response()->json([
                'error_msg'=>'token not sent',
            ]);
        }
    }
}
