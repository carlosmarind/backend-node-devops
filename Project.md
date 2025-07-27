## Resumen del proyecto
Esta es una aplicación backend programada con NestJS que entrega un endpoint API para realizar
calculos simples (suma y resta) usando llamadas REST. La aplicación corre originalmente en el
puerto 4000, pero que se cambió a 3000 y acepta llamadas de tipo: /operaciones?operacion=suma&a=10&b=20

## Datos técnicos
Tipo de aplicación: API REST
Programado con: NestJS
Puerto utilizado: 3000

##Quickstart
npm install
npm run start:dev

## Operaciones
Suma: /operaciones?operacion=suma&a=10&b=20
- Tiene validaciones (a y b no sean indefinidos, y que ambos sean números)

Resta: /operaciones?operacion=resta&a=10&b=20
- No tiene validaciones