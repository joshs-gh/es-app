import { Component, Prop, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'math-problem',
  styleUrl: 'math-problem.scss',
  shadow: true,
})
export class MathProblem {
  @Prop() numRange: number = 10;
  @Prop() won: boolean = false;
  @State() x: number;
  @State() y: number;
  @State() operator: string;
  @State() answer: number;
  @State() gotit: string = '';

  private response: HTMLInputElement;

  @Event() gotItRight: EventEmitter<String>;

  connectedCallback() {
    this.x = Math.floor(Math.random() * (this.numRange + 1));
    this.y = Math.floor(Math.random() * (this.numRange + 1));
    Math.random() < 0.5 ? (this.operator = '+') : (this.operator = '-');
    // no negatives
    if (this.operator === '-' && this.y > this.x) {
      let t = this.x;
      this.x = this.y;
      this.y = t;
    }
    this.operator === '+' ? (this.answer = this.x + this.y) : (this.answer = this.x - this.y);
    console.log('Answer: ' + this.answer);
  }

  componentDidRender() {
    this.response.focus();
  }

  private getText(): string {
    return String(this.x) + ' ' + this.operator + ' ' + String(this.y) + ' =  ';
  }

  private handleKeydown = k => {
    k.code === 'Enter' && this.handleClick(k);
  };

  private handleClick = e => {
    if (parseInt(this.response.value) === this.answer) {
      e.target.classList.remove('animate');
      void e.target.offsetWidth;
      e.target.classList.add('animate');
      setTimeout(function () {
        e.target.classList.remove('animate');
      }, 700);
      this.gotit = 'yup';
      this.gotItRight.emit('Yup!');
    } else {
      this.gotit = 'nope';
    }
    setTimeout(() => {
      this.gotit === 'yup' && this.connectedCallback();
      this.gotit = '';
      this.response.value = '';
    }, 2000);
    this.response.focus();
  };

  render() {
    return (
      <div class="pos">
        {this.won ? (
          <div class="won">You won!</div>
        ) : (
          <div class="block">
            <div class="flex">
              {this.getText()}
              <input ref={e => (this.response = e as HTMLInputElement)} onKeyDown={this.handleKeydown}></input>
              <button class="bubbly-button" onClick={this.handleClick}>
                Go
              </button>
            </div>
            <div class="flex">
              {this.gotit === 'yup' && <div style={{ color: 'green' }}>You got it!</div>}
              {this.gotit === 'nope' && <div style={{ color: 'red' }}>Sorry try again!</div>}
            </div>
          </div>
        )}
      </div>
    );
  }
}
