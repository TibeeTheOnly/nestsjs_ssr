import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';

@Injectable()
export class Bookings {

    private bookings: CreateBookingDto[] = [];
    create(booking: CreateBookingDto) {
        this.bookings.push(booking);
    }

}
