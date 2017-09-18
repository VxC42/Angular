import { Component } from '@angular/core';
import { User } from './user';
import {AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     displayMsg = false;
     title = 'app';
     user = new User();
     users=[];

     onSubmit(){
          this.displayMsg=true;
     }
}
