import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHome(): { message: string } {
    return this.appService.getHome();
  }

  @Get('ping')
  getPing(): string {
    return 'pong';
  }
}
