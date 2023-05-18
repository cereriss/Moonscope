import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { User } from './user/entities/user.entity';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Path to your static files
    }),
    TypeOrmModule.forRoot(), // Your TypeORM configuration
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController, UserController],
  providers: [AppService, UserService],
})
export class AppModule {}
