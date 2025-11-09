import { Controller, Get, Redirect } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Redirect('/bookings', 302)
  getHello() {
    return;
  }
}
