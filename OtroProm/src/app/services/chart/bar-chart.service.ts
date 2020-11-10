/*import { Injectable } from '@angular/core';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Injectable({
  providedIn: 'root'
})
export class BarChartService {

  public Etiquetes: Array <string>;
  public Values: Array <number>;
  public graphics(values: Array<number>, etiquetes: Array<string>): any {
    this.Etiquetes = etiquetes;
    this.Values = values;
  }

  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = this.Etiquetes;
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    { data: this.Values, label: 'Best Fruits' }
  ];

}
*/