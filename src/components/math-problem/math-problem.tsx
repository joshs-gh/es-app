import { Component, Prop, h, State } from '@stencil/core';

@Component({
  tag: 'math-problem',
  styleUrl: 'math-problem.scss',
  shadow: true,
})
export class MathProblem {
  @Prop() range: number = 10;
  @State() x: number;
  @State() y: number;
  @State() operator: string;
  @State() answer: number;
  @State() gotit: string = '';

  private response: HTMLInputElement;

  connectedCallback() {
    this.x = Math.floor(Math.random() * (this.range + 1));
    this.y = Math.floor(Math.random() * (this.range + 1));
    Math.random() < 0.5 ? (this.operator = '+') : (this.operator = '-');
    this.operator === '+' ? (this.answer = this.x + this.y) : (this.answer = this.x - this.y);
    console.log('Answer: ' + this.answer);
  }

  private getText(): string {
    return String(this.x) + ' ' + this.operator + ' ' + String(this.y) + ' =  ';
  }

  private handleKeydown = k => {
    k.code === 'Enter' && this.handleClick(k);
  };

  private handleClick = e => {
    e.preventDefault;
    e.target.classList.remove('animate');
    e.target.classList.add('animate');
    setTimeout(function () {
      e.target.classList.remove('animate');
    }, 1000);

    parseInt(this.response.value) === this.answer ? (this.gotit = 'yup') : (this.gotit = 'nope');
    setTimeout(() => {
      this.gotit === 'yup' && this.connectedCallback();
      this.gotit = '';
      this.response.value = '';
      e.target.classList.remove('animate');
    }, 2000);
  };

  render() {
    return (
      <div>
        <div>
          {this.getText()}
          <input ref={e => (this.response = e as HTMLInputElement)} onKeyDown={this.handleKeydown}></input>
          <button class="bubbly-button" onClick={this.handleClick}>
            Go
          </button>
        </div>
        <div>
          {this.gotit === 'yup' && <div style={{ color: 'green' }}>You got it!</div>}
          {this.gotit === 'nope' && <div style={{ color: 'red' }}>Sorry try again!</div>}
        </div>
      </div>
    );
  }
}
