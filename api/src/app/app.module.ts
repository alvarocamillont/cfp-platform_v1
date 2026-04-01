import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpeakerController } from './speaker.controller';
import { SpeakerService } from './speaker.service';

@Module({
  imports: [],
  controllers: [AppController, SpeakerController],
  providers: [AppService, SpeakerService],
})
export class AppModule {}
