import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AstrologyModule } from './API/astrology.module';
import { DiaryModule } from './diary/diary.module';

@Module({
  imports: [
    UserModule,
    AstrologyModule,
    DiaryModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'), // Path to your static files
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
