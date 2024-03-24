<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Hotel extends Model
{
    protected $fillable = [
        'name',
        'location',
        'region',
        'description',
        'stars',
        'numberofrooms',
    ];
    use HasFactory;
    public function rooms(){
        return $this->hasMany(Room::class);
    }
    // public function reviews()
    // {
    //     return $this->hasMany(Review::class);
    // }
    // public function hasReviewed(User $user)
    // {
    //     return $this->reviews()->where('user_id', $user->id)->exists();
    // }

    public function books()
    {
        return $this->hasMany(Book::class);
    }
    public function bills()
    {
        return $this->hasMany(Payment::class);
    }
    public function images()
    {
        return $this->hasMany(HotelImage::class);
    }

}
