import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {


  chartOptions: {};
  Highcharts = Highcharts;

  constructor() { }


  ngOnInit(): void {
    
  }

}
