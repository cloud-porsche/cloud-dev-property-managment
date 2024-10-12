import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DefectsModule } from './defects/defects.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    DefectsModule,
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.development'],
    }),
    TypeOrmModule.forRoot({
      type: 'sqlite',
      database: 'property-management',
      autoLoadEntities: true,
      synchronize: true, // DO NOT USE IN PRODUCTION
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
