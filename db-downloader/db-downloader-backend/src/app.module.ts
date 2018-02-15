import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HeartbeatController } from './heartbeat.controller';
import { DownloaderController } from './downloader.controller';
import S3DownloaderService from './s3-downloader.service';
import KafkaService from './kafka.service';

@Module({
  imports: [],
  controllers: [AppController, HeartbeatController, DownloaderController],
  components: [S3DownloaderService, KafkaService],
})
export class AppModule {}
