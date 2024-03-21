<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Hotel;
use App\Models\HotelImage;
use App\Models\Room;
use App\Models\RoomImage;

class ImportBookingData extends Command
{
    protected $signature = 'import:booking-data';
    protected $description = 'Import booking data from JSON file';

    public function handle()
    {
        $jsonData = file_get_contents(storage_path('jsondata/nylaData.json'));
        $data = json_decode($jsonData, true);

        foreach ($data as $item) {
            $hotel = Hotel::create([
                'id' => $item['id'],
                'name' => $item['name'],
                'location' => $item['location'],
                'stars' => $item['stars'],
                'region' => $item['region'],
                'description' => $item['description'],
            ]);
        //     foreach ($item['images'] as $imageUrl) {
        //         // HotelImage::create([
        //         //     'hotel_id' => $item->id,
        //         //     'image' => $imageUrl
        //         // ]);

        // }
    }

        $this->info('Booking data imported successfully.');
    }
}
