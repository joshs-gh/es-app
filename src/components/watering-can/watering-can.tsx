import { Component, h, Method, Prop, getAssetPath } from '@stencil/core';

@Component({
  tag: 'watering-can',
  styleUrl: 'watering-can.css',
  assetsDirs: ['assets'],
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
        <img src={getAssetPath(`./assets/wc.webp`)} />
      </div>
    );
  }
}
