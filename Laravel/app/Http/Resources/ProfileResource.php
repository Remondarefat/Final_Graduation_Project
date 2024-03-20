<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'name' => $this->fname . ' ' . $this->lname,
            'email' => $this->email,
            'hotel_name' => $this->reviews->isNotEmpty() ? $this->reviews->first()->hotel->name : null,
            'feedback' => $this->reviews->isNotEmpty() ? $this->reviews->pluck('feedback') : [],

        ];
    }
}
