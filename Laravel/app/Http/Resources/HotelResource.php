<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use App\Http\Resources\HotelImageResource;
use App\Http\Resources\HotelRoomResource;

class HotelResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'location' => $this->location,
            'stars' => $this->stars,
            'description' => $this->description,
            'image' => HotelImageResource::collection($this->images),
            'room' => HotelRoomResource::collection($this->rooms),

        ];
    }
}
