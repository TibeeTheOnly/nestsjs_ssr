import { Injectable } from '@nestjs/common';
import { CreateBookingDto } from './dto/create-booking.dto';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class Bookings {
    private csvFilePath = path.join(process.cwd(), 'bookings.csv');

    constructor() {
        if (!fs.existsSync(this.csvFilePath)) {
            const header = 'Név,E-mail,Dátum és időpont,Vendégek száma\n';
            fs.writeFileSync(this.csvFilePath, header, 'utf-8');
        }
    }

    create(booking: CreateBookingDto) {
        const row = `${booking.name},${booking.email},${booking.datetime.toISOString()},${booking.guests}\n`;
        fs.appendFileSync(this.csvFilePath, row, 'utf-8');
    }
}
