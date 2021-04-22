import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { inject } from '@angular/core/testing';

@Component({
  selector: 'app-dash-page',
  templateUrl: './dash-page.component.html',
  styleUrls: ['./dash-page.component.css']
})
export class DashPageComponent implements OnInit {

  constructor() { }
  dispData(){
    let rec1 = localStorage.getItem("rec", )
  }
  ngOnInit(): void {
  }

}
