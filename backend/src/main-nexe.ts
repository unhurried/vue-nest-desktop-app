import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './module';
import * as open from 'open';

process.env.APP_CONTEXT = "nexe";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  const port = process.env.PORT || 3000;
  await app.listen(port);
  open(`http://localhost:${port}`);
}
bootstrap();
