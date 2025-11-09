import { IsEmail, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';
import { IsFutureDate } from '../decorators/is-future-date.decorator';
import { Type } from 'class-transformer';

export class CreateBookingDto {
    @IsNotEmpty({ message: 'A név megadása kötelező' })
    @IsString()
    name: string;

    @IsNotEmpty({ message: 'Az e-mail cím megadása kötelező' })
    @IsEmail({}, { message: 'Érvénytelen e-mail cím formátum' })
    email: string;

    @IsNotEmpty({ message: 'A dátum és időpont megadása kötelező' })
    @Type(() => Date)
    @IsFutureDate({ message: 'A dátum nem lehet régebbi, mint a mai nap' })
    datetime: Date;

    @IsNotEmpty({ message: 'A vendégek számának megadása kötelező' })
    @Type(() => Number)
    @IsInt({ message: 'A vendégek száma csak egész szám lehet' })
    @Min(1, { message: 'Minimum 1 vendéget kell megadni' })
    @Max(10, { message: 'Maximum 10 vendéget lehet megadni' })
    guests: number;
}