import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hola') // <- /hola
  getHola(): string {
    return this.appService.getHola();
  }

  @Get() // <- /
  getHello(): string {
    return this.appService.getHello();
  }
}
