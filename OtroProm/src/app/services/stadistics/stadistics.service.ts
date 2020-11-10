import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StadisticsService {
  private numero: number;
  constructor() {}

   sumArray(numbers: Array<number>): number{
    this.numero = numbers.reduce((previous, current) => current += previous);
    return this.numero;
   }

   promNumbers(TotalNumbers: number, TotalSum: number): number {
    this.numero = TotalSum / TotalNumbers;
    return this.numero;
   }
   desvEstand(TotalNumbers: number,  numbers: Array<number>): number {
     let sum = this.sumArray(numbers);
     let prom = this.promNumbers(sum, numbers.length);
     const otroarray: Array<number> = numbers;

     for (let i = 0; i < numbers.length; i++) {
      otroarray[i] = (numbers[i] - prom) ** 2;
    }
     sum = this.sumArray(otroarray);
     prom = this.promNumbers(sum, otroarray.length);
     this.numero = prom ** (1 / 2);
     return this.numero;
   }

}
