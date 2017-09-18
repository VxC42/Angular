import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
     title = 'Switchboard';

     switches = ['on','off','on', 'on', 'off','off','off','on', 'on', 'on']

     onClick(idx){
          if (this.switches[idx]==='on'){
               this.switches[idx]='off';
          }else{
               this.switches[idx]='on';
          }
     }
}
