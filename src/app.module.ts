import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DefectsModule } from './defects/defects.module';

@Module({
  imports: [DefectsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
