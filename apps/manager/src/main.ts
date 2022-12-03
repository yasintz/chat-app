/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

const developmentCorsOrigins = [
  'http://localhost:4201',
  'http://127.0.0.1:4201',
  'http://localhost:4200',
  'http://127.0.0.1:4200',
];

const corsOrigins = ['https://ychat-dashboard.vercel.app'].concat(
  environment.production ? [] : developmentCorsOrigins
);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);

  app.enableCors({ origin: corsOrigins });

  const port = process.env.PORT || 3333;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
