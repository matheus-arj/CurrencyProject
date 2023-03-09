import { Controller, Get } from "@nestjs/common";
import { CurrencyService } from "./currency.service";

@Controller('currency')
export class CurrencyController {
  constructor(private currencyService: CurrencyService) {}

  @Get()
    listAllCurrency () {
    return this.currencyService.getAll()
  }

}

