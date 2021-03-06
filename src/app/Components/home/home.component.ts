import { Component, OnInit } from '@angular/core';

import { faTable } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  faTable = faTable;
  faChartBar = faChartBar;

  constructor() { }

  ngOnInit() {
  }

}
