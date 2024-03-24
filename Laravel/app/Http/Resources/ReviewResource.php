<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ReviewResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'feedback' => $this->feedback,
            'rating' => $this->rating,
            'hotel_id' => $this->hotel_id,
            'hotel_name' => $this->hotel->name,
            'hotel_image' => $this->hotel->images[0]->image,

        ];
    }
}
