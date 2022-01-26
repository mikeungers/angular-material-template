import { Component, OnInit } from '@angular/core';
import * as luckysheet from 'node_modules/luckysheet/dist/luckysheet.umd.js';

@Component({
  selector: 'app-sheet-table',
  templateUrl: './sheet-table.component.html',
  styleUrls: ['./sheet-table.component.css']
})
export class SheetTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    let options = {
      container: 'luckysheet' //luckysheet is the container id
    }
    luckysheet.create(options)
  }

}
