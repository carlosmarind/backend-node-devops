import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!!';
  }

  getHola(): string {
    return 'Hola Mundo!!!????';
  }
}
