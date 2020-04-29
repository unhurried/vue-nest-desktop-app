import { Module } from '@nestjs/common';
import { ExcelController } from './excel.controller';
import { ExcelService } from './excel.service';

@Module({
  imports: [],
  providers: [ExcelService],
  controllers: [ExcelController],
})
export class ExcelModule {}
