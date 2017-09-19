import { Component, OnInit } from '@angular/core';
import {Quote} from './quote';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

     newestQuote(eventData){
           this.quotes.push(eventData);
     }

     quotes: Quote[] = [
          {
               quote: "Don\'t cry because it\'s over, smile because it happened.",
               author: "Dr. Seuss",
               likes: 0

          },
          {
               quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
               author: "Marilyn Monroe",
               likes: 0
          }
     ]
     constructor() { }

     ngOnInit() {
     }

}
