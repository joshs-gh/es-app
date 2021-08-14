import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'growing-flower',
  styleUrl: 'growing-flower.css',
  shadow: false,
})
export class GrowingFlower {
  @Prop() left: string;
  @Prop() top: string;
  private flower: HTMLElement;
  private div: HTMLElement;

  componentDidRender() {
    this.div.style.left = this.left;
    this.div.style.top = this.top;
  }

  private g1 = e => {
    this.flower.classList.add('grow1');
  };

  private g2 = e => {
    this.flower.classList.add('grow2');
  };

  render() {
    return (
      <div style={{ position: 'absolute' }} ref={e => (this.div = e as HTMLElement)}>
        <img src="https://www.pinclipart.com/picdir/big/93-934721_smiley-happy-daisy-flower-clipart.png" ref={e => (this.flower = e as HTMLElement)}></img>
        <button onClick={this.g1}>1</button>
        <button onClick={this.g2}>2</button>
      </div>
    );
  }
}
