import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Quote} from '../quote';


@Component({
  selector: 'app-quote-new',
  templateUrl: './quote-new.component.html',
  styleUrls: ['./quote-new.component.css']
})
export class QuoteNewComponent implements OnInit {
     newQuote ={
          quote: "",
          author: "",
          likes: 0
     }
     @Output() newQuoteAdd = new EventEmitter();

     onSubmit(){
          console.log(this.newQuote);
          this.newQuoteAdd.emit(this.newQuote);

          // this.newQuote={
          //      quote: "",
          //      author: "",
          //      likes: 0
          // }
     }

  constructor() { }

  ngOnInit() {
  }

}
