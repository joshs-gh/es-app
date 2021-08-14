import { Component, h, Listen, State } from '@stencil/core';

@Component({
  tag: 'es-game',
  styleUrl: 'es-game.css',
  shadow: false,
})
export class EsGame {
  @State() counter: number = 0;

  @Listen('gotItRight')
  girHandler(event: CustomEvent<String>) {
    this.counter++;
    const fl1 = document.querySelector('#f1') as any;
    const fl2 = document.querySelector('#f2') as any;
    const fl3 = document.querySelector('#f3') as any;

    switch (this.counter) {
      case 1:
        fl1.grow = 'one';
        break;
      case 2:
        fl1.grow = 'two';
        break;
      case 3:
        fl2.grow = 'one';
        break;
      case 4:
        fl2.grow = 'two';
        break;
      case 5:
        fl3.grow = 'one';
        break;
      case 6:
        fl3.grow = 'two';
        break;
      default:
        console.log(`ERROR`);
    }
  }

  render() {
    return (
      <div>
        <img class="bg" src="http://www.clker.com/cliparts/0/f/b/8/1197091304272882353carlitos_Cartoon_Landscape.svg" />
        <math-problem num-range="10"></math-problem>
        <growing-flower id="f1" top="750px" left="500px"></growing-flower>
        <growing-flower id="f2" top="750px" left="800px"></growing-flower>
        <growing-flower id="f3" top="750px" left="1100px"></growing-flower>
      </div>
    );
  }
}
