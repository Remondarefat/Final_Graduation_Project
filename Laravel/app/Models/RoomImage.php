<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RoomImage extends Model
{
    protected $fillable=[
        'image'
    ];
    use HasFactory;
    public function room(){
        return $this->belongsTo(Room::class);
    }
}
