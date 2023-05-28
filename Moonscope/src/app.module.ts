import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user.entity';
import { UserModule } from './user/user.module';
import { AstrologyModule } from './API/astrology.module';

@Module({
  imports: [
    UserModule,
    AstrologyModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'michelle',
      password: '0987654321',
      database: 'moonscope',
      entities: [__dirname + '/../**/*.entity.{js,ts}'],
    }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Path to your static files
    }),
    TypeOrmModule.forFeature([User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
