import { IsDate, IsEmail, IsInt, IsString, Min } from 'class-validator';
import { IsFutureDate } from '../decorators/is-future-date.decorator';
import { Type } from 'class-transformer';

export class CreateBookingDto {
    @IsString()
    name: string;
    @IsEmail()
    email: string;
    @Type(() => Date)
    @IsDate()
    @IsFutureDate()
    startDate: Date;
    @Type(() => Date)
    @IsDate()
    @IsFutureDate()
    endDate: Date;
    @IsInt()
    @Min(1)
    guests: number;
}