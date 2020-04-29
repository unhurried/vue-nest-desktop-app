import { Controller,  HttpCode, Get, Res } from '@nestjs/common';
import { ExcelService } from './excel.service';
import { Response } from 'express';

@Controller('excel')
export class ExcelController {
  constructor(private service: ExcelService) {}

  @HttpCode(200)
  @Get('export')
  async get(@Res() res: Response) {
    const buffer = await this.service.generate();
    res.attachment('out.xlsx');
    res.send(buffer);
  }
}
