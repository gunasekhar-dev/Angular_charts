import { Component } from '@angular/core';
import { Color, ScaleType } from '@swimlane/ngx-charts';
import { single, multi } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  single!: any[];
  multi!: any[];
  // view: any[] = [700, 400];
  x: number = 500;
  y: number = 400;

  // options
  showXAxis: boolean = true;
  showYAxis: boolean = true;
  gradient: boolean = false;
  showLegend: boolean = true;
  showXAxisLabel: boolean = true;
  yAxisLabel: string = 'Country';
  showYAxisLabel: boolean = true;
  xAxisLabel: string = 'Population';
  groupPadding: number = 16;

  // colorScheme = {
  //   domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  // };
  colorScheme: Color = {
    name: 'myScheme',
    selectable: true,
    group: ScaleType.Ordinal,
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA'],
  };

  constructor() {
    Object.assign(this, { single, multi });
  }
}
