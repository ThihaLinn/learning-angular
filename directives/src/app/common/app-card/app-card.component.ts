import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './app-card.component.html'
})
export class AppCardComponent  {

  @Input()
  title:any;

}
