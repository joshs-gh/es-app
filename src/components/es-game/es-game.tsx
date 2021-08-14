import { Component, h } from '@stencil/core';

@Component({
  tag: 'es-game',
  styleUrl: 'es-game.css',
  shadow: false,
})
export class EsGame {
  private f1: HTMLElement;

  componentDidRender() {
    const fl1 = document.querySelector('#f1') as any;
    setInterval(() => (fl1.grow = 'one'), 2000);
  }

  render() {
    return (
      <div>
        <img class="bg" src="http://www.clker.com/cliparts/0/f/b/8/1197091304272882353carlitos_Cartoon_Landscape.svg" />
        <math-problem num-range="10"></math-problem>
        <growing-flower id="f1" ref={e => (this.f1 = e as HTMLElement)} top="750px" left="500px"></growing-flower>
        <growing-flower top="750px" left="800px"></growing-flower>
        <growing-flower top="750px" left="1100px"></growing-flower>
      </div>
    );
  }
}
