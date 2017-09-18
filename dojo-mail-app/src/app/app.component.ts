import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     title = "Superhero Mail";
     emailArray: object[] = [{email: 'Diana@Prince.com', importance:true, subject:'Truth', content: 'Amazon Warriors'}, {email: 'Bruce@Wayne.com', importance:true, subject:'Justice', content: 'Bats'}, {email: 'Clark@Kent.com', importance:true, subject:'Strength', content: 'Alien Planets'}, {email: 'Barry@Allen.com', importance:false, subject:'Speed', content: 'Flashpoints'}];
}
