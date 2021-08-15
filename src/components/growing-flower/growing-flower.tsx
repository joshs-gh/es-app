import { Component, Prop, h, Watch, getAssetPath } from '@stencil/core';

@Component({
  tag: 'growing-flower',
  styleUrl: 'growing-flower.css',
  assetsDirs: ['assets'],
  shadow: false,
})
export class GrowingFlower {
  @Prop() left: string;
  @Prop() top: string;
  @Prop() grow: string;
  private flower: HTMLElement;
  private div: HTMLElement;

  componentDidRender() {
    this.div.style.left = this.left;
    this.div.style.top = this.top;
  }

  @Watch('grow')
  growit() {
    this.grow === 'one' && this.flower.classList.add('grow1');
    this.grow === 'two' && this.flower.classList.add('grow2');
  }

  render() {
    return (
      <div class="flower" ref={e => (this.div = e as HTMLElement)}>
        <img src={getAssetPath(`./assets/f.png`)} ref={e => (this.flower = e as HTMLElement)}></img>
      </div>
    );
  }
}
