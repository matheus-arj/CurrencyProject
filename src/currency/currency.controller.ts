import { Controller, Get, Param } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { CurrencyService } from './currency.service';

@Controller('currency')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Get()
  listAllCurrency() {
    return this.currencyService.getAll();
  }

  @Get(':symbol')
  getBySymbol(@Param('symbol') symbol: string) {
    return this.currencyService.getSymbol(symbol);
  }
}
