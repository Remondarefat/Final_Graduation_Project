<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Storage;
use Illuminate\Validation\ValidationException;

class UserController extends Controller
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
            // Validate request data
            $request->validate([
                'fname' => 'required',
                'lname' => 'required',
                'email' => 'required|email|unique:users',
                'password' => 'required',
                'dob' => 'required',
                'phone' => 'required',
            ], [
                'email.required' => 'Email cannot be empty.',
                'email.email' => 'Please provide a valid email address.',
                'email.unique' => 'This email address is already in use.',
            ]);

            // Create user
            $hashedPassword = Hash::make($request->password);
            $request->merge(['password' => $hashedPassword]);
            $user = User::create($request->all());

            return response()->json(['message' => 'User created successfully'], 201);
        } catch (ValidationException $e) {
            // Return validation error response
            return response()->json(['errors' => $e->errors()], 422);
        } catch (QueryException $e) {
            // Return error response if an exception occurs during user creation
            return response()->json(['message' => 'Failed to create user', 'error' => $e->getMessage()], 500);
        }
    }



    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $user = User::findOrFail($id);
        return response()->json($user);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        try {
            $data = $request->validate([
                'fname' => 'string|required',
                'lname' => 'string|required',
                'email' => 'email|required',
                'phone' => 'string|required',
                'password' => 'nullable',
                'dob' => 'date',
                'profile' => 'nullable',
            ]);
            if ($request->profile) {
                foreach ($request->file( 'profile') as $profile) {
                    $filename= $profile->getClientOriginalName();
                    $profile->move('images', $filename);
                    $data['profile']= $filename;
                }
            }
            if ($request->password) {
                $hashedPassword = Hash::make($request->password);
                $data['password'] = $hashedPassword;

            }
            User::where('id', $id)->update($data);



        return response()->json(['message' => 'Profile updated successfully'], 200);

        } catch (QueryException $e) {
            // Return error response if an exception occurs during user creation
            return response()->json(['message' => 'Failed to ubdate user', 'error' => $e->getMessage()], 500);
        }
    }


    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
