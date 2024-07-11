import { Component } from '@angular/core';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent {

  buttons = [
    "1","2","3","DEL",
    "4","5","6","+",
    "7","8","8","-",
    ".","0","/","X"
  ]

}
