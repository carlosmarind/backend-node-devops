import { Test, TestingModule } from '@nestjs/testing';
import { OperacionesService } from './operaciones.service';

describe('OperacionesService', () => {
  let service: OperacionesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OperacionesService],
    }).compile();

    service = module.get<OperacionesService>(OperacionesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  test('operacion deberia sumar', () => {
    expect(service.operar('suma', 10, 50)).toBe(60);

    let a = 10;
    let b = 30;

    expect(service.operar('suma', a, b)).not.toBe(41);

    a = -100;
    b = 10;

    expect(service.operar('suma', a, b)).toBe(-90);
  });

  test('operacion deberia restar', () => {
    expect(service.operar('resta', 10, 50)).toBe(-40);

    let a = 10;
    let b = 30;

    expect(service.operar('resta', a, b)).not.toBe(20);

    a = -100;
    b = 10;

    expect(service.operar('resta', a, b)).toBe(-110);
  });
});
