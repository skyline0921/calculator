import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {

  constructor() {}

  buttons = [
    "1", "2", "3", "DEL",
    "4", "5", "6", "+",
    "7", "8", "9", "-",
    ".", "0", "/", "X"
  ];

  theme = 'normal';
  screenContent = '';
  number_1 = '';
  rule = '';
  number_2 = '';

  ngOnInit(): void {}

  actionClick(button: string) {
    console.log(button);
    
    if (['-', '+', '/', 'X'].includes(button)) {
      this.calcular();

      if (this.rule === '') {
        this.rule = button;
        this.screenContent += ` ${button} `;
      }

    } else if (button === '.') {
      this.screenContent += '.';
    } else if (button === 'DEL') {
      this.screenContent = this.screenContent.slice(0, -1);
    } else {
      this.screenContent += button;
    }
    console.log(button);
  }

  calcular() {
    const [number1, operator, number2] = this.screenContent.split(' ').map((item) => item.trim());
    let result: number = 0;

    console.log(number1, operator, number2);
    
    if(!number2) return;

    switch (operator) {
      case '+':
        result = parseFloat(number1) + parseFloat(number2);
        break;
      case '-':
        result = parseFloat(number1) - parseFloat(number2);
        break;
      case 'X':
        result = parseFloat(number1) * parseFloat(number2);
        break;
      case '/':
        result = parseFloat(number1) / parseFloat(number2);
        break;
    }

    this.screenContent = result.toString();
    this.rule = '';
  }

  reset() {
    this.screenContent = '';
    this.rule = '';
  }

  solution() {
    if (this.screenContent === '') {
      alert('No calculation!!')
    } else {
      this.calcular();
    }
  }

  choiseTheme(theme:'normal' | 'light' | 'dark') {
    this.theme = theme;
    localStorage.setItem('theme', theme); 
    const html = document.querySelector('html');

    if (theme === 'normal') {
      html?.classList.remove('light');
      html?.classList.remove('dark');
    } 
    else if (theme === 'light') {
      html?.classList.remove('dark');
      html?.classList.add('light');
    }
    else if (theme === 'dark') {
      html?.classList.remove('ligth');
      html?.classList.add('dark');
    }
}

  get setClass() {
    if (this.theme === 'normal') return 'normal';
    if (this.theme === 'light') return 'light';
    if (this.theme === 'dark') return 'dark';
    return '';
   }
}