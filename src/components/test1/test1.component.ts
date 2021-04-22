import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  usn1 :any;
  pass1 = "******"
  constructor() { }
  n1 = "Some tEXT"
 @Input() n2 :any;
  sendData() {
    console.log("This is a name "+this.n2)
  }
  ngOnInit(): void {
  }

}
