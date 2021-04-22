import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fcp',
  templateUrl: './fcp.component.html',
  styleUrls: ['./fcp.component.css']
})
export class FcpComponent implements OnInit {

  nameF : any;
  nameFather : any;
  pass1: any;
  rmn :  any;
  edu : any;
  constructor() { }

  ngOnInit(): void {
  }

  getData() {

    console.log("Name is ",this.nameF)
    console.log("Father's name is ",this.nameFather)
    console.log("RMN is ",this.rmn)
    console.log("Education is ",this.edu)
    console.log("Password is ",this.pass1)
  }

}
