<?php

namespace App\Models;

use App\Models\User;
use App\Models\Hotel;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Review extends Model
{
    protected $fillable = [
        'feedback', 'rating', 'hotel_id', 'user_id',
    ];

    public function hotel()
{
    return $this->belongsTo(Hotel::class);
}
public function user()
    {
        return $this->belongsTo(User::class);
    }

}
