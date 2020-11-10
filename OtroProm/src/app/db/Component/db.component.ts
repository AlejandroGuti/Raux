import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-db',
  templateUrl: './db.component.html',
  styleUrls: ['./db.component.scss']
})
export class DBComponent implements OnInit {

  private urlapi
    = 'context\income.json';
  public currentEuroRates: any = null;


  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {
    //console.log(this.getCurrentEuroRates());
  }
/*
  private getCurrentEuroRates() {
    //const currencies = 'USD,GBP,CHF,JPY';
    //const url = `${this.urlapi}?symbols=${currencies}`;
    this.httpClient
      .get(this.urlapi)
      .subscribe(apiData => (this.currentEuroRates = apiData));
  }*/

}
