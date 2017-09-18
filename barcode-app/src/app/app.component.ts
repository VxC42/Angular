import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     title = 'Retro Barcode Generator';
     columns=[1,2,3,4,5,6,7,8,9,10];
     getRandomColor() {
          var letters = '0123456789ABCDEF';
          var color = '#';
          for (var i = 0; i < 6; i++) {
               color += letters[Math.floor(Math.random() * 16)];
          }
          return color;
     };
     color = 'red';
}
