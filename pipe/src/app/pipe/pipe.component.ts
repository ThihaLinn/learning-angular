import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html'
})
export class PipeComponent   {

  User = {
    name:"Thiha Linn",
    role:"Admin"
  }

  data1=175637

  data2=5.45643324

  today = new Date();

  value = 0.75

  message = "Learning Angular"

}
