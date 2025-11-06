import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Saludos desde mi CICD';
  }

  getHola(): string {
    return 'Hola Mundo!!!????';
  }
}
