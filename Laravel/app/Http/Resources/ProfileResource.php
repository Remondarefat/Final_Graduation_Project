<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ProfileResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'name' => $this->fname . ' ' . $this->lname,
            'fname' => $this->fname,
            'lname' => $this->lname,
            'email' => $this->email,
            'image' => $this->profile,
            // 'hotel_name' => $this->reviews->isNotEmpty() ? $this->reviews->first()->hotel->name : null,
            'feedback' => ReviewResource::collection($this->reviews),
            'book' => BookResource::collection($this->books),

        ];
    }
}
