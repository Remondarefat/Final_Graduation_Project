<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomImage extends Model
{
    protected $fillable=[
        'image',
        'room_id',
    ];
    use HasFactory;
    public function room(){
        return $this->belongsTo(Room::class);
    }
}
