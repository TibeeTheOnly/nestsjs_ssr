import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { BookingsController } from './bookings/bookings.controller';
import { Bookings } from './bookings/bookings';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
  })],
  controllers: [AppController, BookingsController],
  providers: [AppService, Bookings],
})
export class AppModule {}
