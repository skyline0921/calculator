import { Component } from '@angular/core';

@Component({
  selector: 'app-page-2',
  templateUrl: './page-2.component.html',
  styleUrls: ['./page-2.component.scss']
})
export class Page2Component {
  buttons = [
    "1","2","3","DEL",
    "4","5","6","+",
    "7","8","8","-",
    ".","0","/","X"
  ]
}
