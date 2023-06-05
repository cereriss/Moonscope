import { NestFactory } from '@nestjs/core';
import { AppModule } from './src/app.module';
import * as express from 'express';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Serve static files
  app.use(express.static('public'));
  app.use(cookieParser());

  await app.listen(3000);
  console.log('Application is running on port 3000');
}

bootstrap().catch((error) => {
  console.error('Error starting the application', error);
});
