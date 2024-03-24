<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Resources\ProfileResource;

class ProfileController extends Controller
{
    public function show($id)
    {
        $user = User::findOrFail($id);

        return new ProfileResource($user);
    }
}
