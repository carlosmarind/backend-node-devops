import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    const mensaje = 'mi nuevo saludo, Hello World!!!';
    return `${mensaje}`;
  }

  getHola(): string {
    return 'Hola Mundo!';
  }
}
