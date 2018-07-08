import { Component, OnInit } from '@angular/core';

export interface Saint {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-saints',
  templateUrl: './saints.component.html',
  styleUrls: ['./saints.component.scss']
})
export class SaintsComponent implements OnInit {
  saints: Saint[] = [
    {text: 'One', cols: 1, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1'},
  ];

  constructor() { }

  ngOnInit() {
  }

}
