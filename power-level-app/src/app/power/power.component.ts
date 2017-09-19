import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-power',
  templateUrl: './power.component.html',
  styleUrls: ['./power.component.css']
})
export class PowerComponent{
     initPower=100;
     newPower:any;

     constructor() { }

     ngOnInit() {
     }

     onSubmit(){
          this.newPower = this.initPower;
     };

}
