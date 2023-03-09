import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';

@Injectable()
export class CurrencyService {
  constructor(private httpService: HttpService) { }

  getAll(): Observable<any> {
    return this.httpService.get('https://economia.awesomeapi.com.br/all');
  }
}