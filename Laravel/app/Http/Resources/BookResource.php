<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class BookResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'checkin' => $this->checkin,
            'checkout' => $this->checkout,
            'total_due' => $this->total_due,
            'hotel_name' => $this->hotel->name,
            'hotel_image' => $this->hotel->images[0]->image

        ];
    }
}
