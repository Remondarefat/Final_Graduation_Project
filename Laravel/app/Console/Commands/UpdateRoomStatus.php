<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use App\Models\Room;
use App\Models\Book;

class UpdateRoomStatus extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:update-room-status';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command description';

    /**
     * Execute the console command.
     */
    public function handle()
    {
          // Get expired bookings
          $expiredBookings = Book::where('checkout', '<', Carbon::now())->get();

          foreach ($expiredBookings as $booking) {
              // Update room status to available
              Room::find($booking->room_id)->update(['status' => 'available']);
          }
          $this->info('Room statuses updated successfully.');
    }
}
