import { BadRequestException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { catchError, map } from 'rxjs';

@Injectable()
export class CurrencyService {
  constructor(private httpService: HttpService) {}

  economyUrl = process.env.ECONOMY_URL;

  getAll() {
    const currencyUrl = this.httpService.get(this.economyUrl).pipe(
      catchError((error) => {
        error('Error when getting data');
        throw new BadRequestException('HELLOOO', error);
      }),
      map((result) => {
        if (result.status === 200) {
          return result.data;
        }
      }),
    );
    console.log("get successfully ran");
    return currencyUrl;
  }

  getSymbol(symbol: string) {
    return this.getAll().pipe(
      map((result) => result[symbol]),
    );
  }
}