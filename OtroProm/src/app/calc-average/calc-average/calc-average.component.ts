import { Component, ModuleWithComponentFactories, OnInit, ElementRef } from '@angular/core';
import { Observable } from 'rxjs';


import { StadisticsService } from './../../services/stadistics/stadistics.service';
import { DataService } from './../../services/data/data.service';


import { ChartOptions, ChartType, ChartDataSets, Chart } from 'chart.js';


@Component({
  selector: 'app-calc-average',
  templateUrl: './calc-average.component.html',
  styleUrls: ['./calc-average.component.scss'],

})
export class CalcAverageComponent implements OnInit {
  image: string[] = ['./../../../assets/Images/Promedio.jpg'];
  numbers: number[] = [];
  inNumber: number = null;
  result: number = null;
inIncome: number[] = [];
inCount: number[] = [];
Promed: number;
Desv: number;
otherNumbers$: Observable<number[]>;

  // tslint:disable-next-line: variable-name
  constructor(
    private _stadisticsServices: StadisticsService,
    private _dataService: DataService,
    private elementRef: ElementRef
    ) {}

  ngOnInit(): void {
    this.GetData();
  }
//rev



GetData(): any{
  return this._dataService.getHistogram().subscribe(h => {
     const inCount =  h.points.map<number>(p => p.count);
     const inIncome =  h.points.map<number>(p => p.income);
     this.Chartgrap(inIncome , inCount);
     console.log(inCount);
     console.log(inIncome);
     this.Promed = this._stadisticsServices.promNumbers
    (inCount.length, this._stadisticsServices.sumArray(inCount));
     this.Desv = this._stadisticsServices.desvEstand(inCount.length, inCount);
  });
 }
 GetData2(): any{
  return this._dataService.getHistogram().subscribe(h => {
     const inCount =  h.points.map<number>(p => p.count);
     const inIncome =  h.points.map<number>(p => p.income);
     this.Chartgrap(inIncome, inCount);
     console.log(inCount);
     console.log(inIncome);
     this.Promed = this._stadisticsServices.promNumbers
    (inCount.length, this._stadisticsServices.sumArray(inCount));
     this.Desv = this._stadisticsServices.desvEstand(inCount.length, inCount);
  });
 }

Chartgrap(a: any, b: any): void {
  let ctx = 'myCharOthert';
  let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: a,
        datasets: [{
            label: '# Income',
            data: b,
            borderWidth: 1
        }]
    }
});
}


  addItem(addnumber: number): void {
    this.numbers.push(addnumber);
    this.inNumber = null;
    this.average();
  }

  average(): number {
    this.result = this._stadisticsServices.sumArray(this.numbers);
    return this.result = this._stadisticsServices.promNumbers(this.numbers.length, this.result);
  }
  clear(): void {
    this.numbers = [];
    this.inNumber = null;
    this.result = null;
  }
  deleteItem(id: number): void {
    this.numbers.splice(id, 1);
    this.average();
  }
  editNumber(editNum: number, editIndex: number): void {
    this.numbers[editIndex] = editNum;
    this.average();
  }
}
