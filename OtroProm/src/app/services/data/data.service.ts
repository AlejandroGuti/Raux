import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  info: any = {};
  cargada = false;

  constructor(private http: HttpClient) { }

  // tslint:disable-next-line: no-shadowed-variable
  getData(url: string): Observable<object> {
    return this.http.get(url);
  }


  getHistogram(): Observable<Histogram> {
    return new Observable<Histogram>(o => {
      this.http.get<any>('./assets/income.json').subscribe(d => {
        const histogram: Histogram = { points: d.histogram };
        o.next(histogram);
        o.complete();
      });
    });
  }
}


export interface Histogram {
  points: DataPoint[];
}

export interface DataPoint {
  key: number;
  income: number;
  count: number;
}
