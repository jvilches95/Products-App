import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent implements OnChanges {

  @Input() rating = 0;
  cropWidth = 75;
  @Output() ratingClicked: EventEmitter<string> = 
  new EventEmitter<string>();

  constructor() { }

ngOnChanges(): void{
  this.cropWidth = this.rating * 75/5;
}

onClicked(): void{
  this.ratingClicked.emit(`The rating ${this.rating} was clicked`)
}

}
