import { Injectable } from '@nestjs/common';
import * as XlsxPopulate from 'xlsx-populate';
import { join } from 'path';

@Injectable()
export class ExcelService {
  async generate(): Promise<any> {
    let wb: any;
    if (process.env.APP_CONTEXT == 'nexe') {
      wb = await XlsxPopulate.fromFileAsync(join(__dirname, '..', 'resource', 'template.xlsx'));
    } else {
      wb = await XlsxPopulate.fromFileAsync(join(__dirname, '..', '..', 'resource', 'template.xlsx'));
    }
    wb.sheet(0).cell('C2').value('abc');
    wb.sheet(0).cell('C3').value('123');
    return await wb.outputAsync();
  }
}
