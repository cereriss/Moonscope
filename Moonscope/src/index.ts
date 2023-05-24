import { AppDataSource } from './data-source';
import { User } from './entity/User';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  AppDataSource.initialize();
  const app = await NestFactory.create(AppModule);

  // Serve static files
  app.use(express.static('public'));

  await app.listen(3000);
  console.log('Application is running on port 3000');
}

bootstrap().catch((error) => {
  console.error('Error starting the application', error);
});
