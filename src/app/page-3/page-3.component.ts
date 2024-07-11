import { Component } from '@angular/core';

@Component({
  selector: 'app-page-3',
  templateUrl: './page-3.component.html',
  styleUrls: ['./page-3.component.scss']
})
export class Page3Component {
  buttons = [
    "1","2","3","DEL",
    "4","5","6","+",
    "7","8","8","-",
    ".","0","/","X"
  ]
}
