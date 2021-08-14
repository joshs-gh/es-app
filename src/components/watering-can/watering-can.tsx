import { Component, h, Method, Prop } from '@stencil/core';

@Component({
  tag: 'watering-can',
  styleUrl: 'watering-can.css',
  shadow: true,
})
export class WateringCan {
  @Prop() wcTop: string;
  private div: HTMLElement;

  componentDidRender() {
    this.div.style.top = this.wcTop;
  }

  @Method()
  async water(flower: string) {
    this.div.classList.add(flower);
    setInterval(() => this.div.classList.remove(flower), 5000);
  }

  render() {
    return (
      <div class="can" ref={e => (this.div = e as HTMLElement)}>
        <img src="https://media3.giphy.com/media/jsekdGweixuDpH3Q6d/giphy.gif?cid=4d1e4f290abd3f3558fd4b63ffe3da46dbbb849b7f1fb122&rid=giphy.gif" />
      </div>
    );
  }
}
