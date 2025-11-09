import { Body, Controller, Get, Post, Render, Res, Query } from '@nestjs/common';
import { Bookings } from './bookings';
import { CreateBookingDto } from './dto/create-booking.dto';
import type { Response } from 'express';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Controller('bookings')
export class BookingsController {
    constructor(private readonly bookingsService: Bookings) {}

    @Get()
    @Render('booking-form')
    showBookingForm(@Query() query: any) {
        return {
            errors: [],
            formData: {
                name: query.name || '',
                email: query.email || '',
                datetime: query.datetime || '',
                guests: query.guests || ''
            }
        };
    }

    @Post()
    async createBooking(@Body() body: any, @Res() res: Response) {
        const bookingDto = plainToClass(CreateBookingDto, body);
        const errors = await validate(bookingDto);

        if (errors.length > 0) {
            const errorMessages = errors.flatMap(error => 
                Object.values(error.constraints || {})
            );

            return res.render('booking-form', {
                errors: errorMessages,
                formData: {
                    name: body.name || '',
                    email: body.email || '',
                    datetime: body.datetime || '',
                    guests: body.guests || ''
                }
            });
        }

        this.bookingsService.create(bookingDto);
        return res.redirect('/bookings/success');
    }

    @Get('success')
    @Render('booking-success')
    showSuccess() {
        return {};
    }
}
