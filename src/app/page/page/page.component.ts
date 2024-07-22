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
    "4", "5", "6", "-",
    "7", "8", "9", "+",
    ".", "0", "/", "X",
    "x²", "√",
  ];

  theme = 'normal';
  screenContent = '';
  number_1 = '';
  rule = '';
  number_2 = '';
  history: string[] = [];

  ngOnInit(): void {
    window.addEventListener('keydown', this.handleKeydown.bind(this));
  }

  handleKeydown(event: KeyboardEvent): void {
    const key = event.key;
  
    if (!isNaN(Number(key))) {
      this.actionClick(key);
    } else if (key === '1') {
      this.actionClick('1');
    } else if (key === '2') {
      this.actionClick('2');
    } else if (key === '3') {
      this.actionClick('3');
    } else if (key === '4') {
      this.actionClick('4');
    } else if (key === '5') {
      this.actionClick('5');
    } else if (key === '6') {
      this.actionClick('6');
    } else if (key === '7') {
      this.actionClick('7');
    } else if (key === '8') {
      this.actionClick('8');
    } else if (key === '9') {
      this.actionClick('9');
    } else if (key === '0') {
      this.actionClick('0');
    } else if (key === 'Enter') { 
      this.solution()
    }
    else if (key === 'Backspace') { 
      this.actionClick('DEL')
    }
  }
  

  actionClick(button: string) {
    console.log(button);

    if (button !== 'DEL') {
      if (this.history.length >= 17) {
        return;
      }
      this.history.push(button);
    }

    if (this.screenContent.length >= 17 && button !== 'DEL') {
      return;
    }

    if (['-', '+', '/', 'X'].includes(button)) {
      this.calcular();

      if (this.rule === '') {
        this.rule = button;
        this.screenContent += ` ${button} `;
      }

    } else if (button === '.') {
      if (!this.screenContent.includes('.')) {
        this.screenContent += '.';
      }
    } else if (button === 'DEL') {
      this.screenContent = this.screenContent.slice(0, -1);
      if (this.history.length > 0) {
        this.history.pop(); 
      }
    } else if (button === 'x²') {
      this.calcular('square');
    } else if (button === '√') {
      if (this.screenContent && !isNaN(Number(this.screenContent))) {
        alert('Operação inválida: não pode calcular a raiz de um número no formato atual.');
      } else {
        if (!this.screenContent.startsWith('√')) {
          this.screenContent = `√${this.screenContent}`;
        }
      }
    } else {
      this.screenContent += button;
    }
  }

  calcular(operation?: string) {
    if (operation === 'square') {
      const base = parseFloat(this.screenContent);
      const result = base * base;
      this.screenContent = result.toString();
      this.history.push(`= ${result}`); 
      return;
    }

    if (operation === 'sqrt' || this.screenContent.startsWith('√')) {
      const number = parseFloat(this.screenContent.replace(/[√()]/g, ''));
      const result = Math.sqrt(number);
      this.screenContent = result.toString();
      this.history.push(`= ${result}`);
      return;
    }

    const [number1, operator, number2] = this.screenContent.split(' ').map((item) => item.trim());
    let result: number = 0;

    console.log(number1, operator, number2);

    if (!number2) return;

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
    this.history.push(`= ${result}`);
    this.rule = '';
  }

  reset() {
    this.screenContent = '';
    this.rule = '';
    this.history = [];
  }

  solution() {
    if (this.screenContent === '') {
      alert('No calculation!!')
    } else {
      this.calcular();
    }
  }

  choiseTheme(theme: 'normal' | 'light' | 'dark') {
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
      html?.classList.remove('light');
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