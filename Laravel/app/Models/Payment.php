<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Payment extends Model
{
    protected $fillable = [
        'email',
        'expiry_date',
        'payment_card_id',
        'country',
        'fname',
        'middlename',
        'lname',
        'home_tel',
        'address1',
        'address2',
        'state',
        'postal_code',
        'type',
        'suburb'
    ];
    use HasFactory;
    public function user(){
        return $this->belongsTo(User::class);
    }
    public function hotel(){
        return $this->belongsTo(Hotel::class);
    }

}
