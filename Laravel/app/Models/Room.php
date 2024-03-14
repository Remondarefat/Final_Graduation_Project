<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $fillable = [
        'title',
        'price',
        'view',
        'type',
    ];
    use HasFactory;
    public function hotel(){
        return $this->belongsTo(Room::class);
    }
    public function roomImages(){
        return $this->hasMany(RoomImage::class);
    }
    public function books()
    {
        return $this->hasMany(Book::class);
    }

}
