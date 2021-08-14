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
    const mp = document.querySelector('math-problem') as any;
    const wc1 = document.querySelector('#wc1') as any;
    const wc2 = document.querySelector('#wc2') as any;

    switch (this.counter) {
      case 1:
        fl1.grow = 'one';
        wc1.water('f1');
        break;
      case 2:
        fl1.grow = 'two';
        wc2.water('f1');
        break;
      case 3:
        fl2.grow = 'one';
        wc1.water('f2');
        break;
      case 4:
        fl2.grow = 'two';
        wc2.water('f2');
        break;
      case 5:
        fl3.grow = 'one';
        wc1.water('f3');
        break;
      case 6:
        fl3.grow = 'two';
        wc2.water('f3');
        mp.won = true;
        break;
      default:
        console.log(`ERROR ${event.detail}`);
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
        <watering-can id="wc1" wc-top="600px"></watering-can>
        <watering-can id="wc2" wc-top="500px"></watering-can>
      </div>
    );
  }
}
