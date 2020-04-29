import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ExcelModule } from './excel/excel.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, 'resource', 'public'),
    }),
    ExcelModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
