import { Component } from '@angular/core';

@Component({
     selector: 'app-root',
     templateUrl: './app.component.html',
     styleUrls: ['./app.component.css']
})
export class AppComponent {
     title = 'US Timezone Display';
     time = new Date();
     pst = this.time.toLocaleString("en-US", {timeZone: "America/los_angeles"})
     mst = this.time.toLocaleString("en-US", {timeZone: "America/Boise"})
     cst = this.time.toLocaleString("en-US", {timeZone: "America/Matamoros"})
     est = this.time.toLocaleString("en-US", {timeZone: "America/New_York"})

}
