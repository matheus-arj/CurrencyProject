import { Module } from '@nestjs/common';
import { CurrencyService } from './currency.service';

@Module({
  controllers: [CurrencyService],
  providers: [CurrencyService],
})
export class CurrencyModule {}
