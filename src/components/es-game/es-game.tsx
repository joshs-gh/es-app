import { Component, h, Listen, State, getAssetPath } from '@stencil/core';
@Component({
  tag: 'es-game',
  styleUrl: 'es-game.css',
  assetsDirs: ['assets'],
  shadow: false,
})
export class EsGame {
  @State() counter: number = 0;
  @State() oot: boolean = false;
  @State() won: boolean = false;

  @Listen('outOfTime')
  ootHandler() {
    this.oot = true;
  }

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
        this.won = true;
        break;
      default:
        console.log(`ERROR ${event.detail}`);
    }
  }

  render() {
    return (
      <div class="bg">
        <img class="bg" src={getAssetPath(`./assets/b.svg`)} />
        {this.oot && !this.won ? (
          <div class="lost">
            <img class="sowwy" src={getAssetPath('./assets/s1.webp')} />
          </div>
        ) : (
          <div>
            <math-problem num-range="10"></math-problem>
            {!this.won && <count-down from-seconds="60"></count-down>}
          </div>
        )}
        <growing-flower id="f1" top="75vh" left="40%"></growing-flower>
        <growing-flower id="f2" top="75%" left="60%"></growing-flower>
        <growing-flower id="f3" top="75%" left="80%"></growing-flower>
        <watering-can id="wc1" wc-top="60%"></watering-can>
        <watering-can id="wc2" wc-top="50%"></watering-can>
      </div>
    );
  }
}
