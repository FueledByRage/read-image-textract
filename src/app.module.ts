import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ReadImageService } from './read-image/read-image.service';
import { ReadImageController } from './read-image/read-image.controller';
import { AWSProvider } from './read-image/provider';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  })],
  controllers: [ReadImageController],
  providers: [ReadImageService, AWSProvider],
})
export class AppModule {}
