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
            $filename = '';
            if ($request->hasFile('profile')) {
                $filename = $request->file('profile')->getClientOriginalName();
                $request->file('profile')->move('storage/images', $filename);
            }
            $data = $request->validate([
                'fname' => 'string',
                'lname' => 'string',
                'email' => 'string|email',
                'phone' => 'string',
                'password' => 'string',
                'dob' => 'date',
            ]);

            // Assign $filename to 'profile' key in $data
            $data['profile'] = $filename;

            $user = User::findOrFail($id);

            $user->fname = $request->fname;
            $user->lname = $request->lname;
            $user->email = $request->email;
            $user->phone = $request->phone;
            $user->password = Hash::make($request->password);
            $user->dob = $request->dob;
            $user->save();

            return response()->json(['message' => 'Profile updated successfully'], 200);
        } catch (QueryException $e) {
            return response()->json(['message' => 'Failed to update profile', 'error' => $e->getMessage()], 500);
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
