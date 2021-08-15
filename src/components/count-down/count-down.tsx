import { Component, h, Prop, State, Watch, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'count-down',
  styleUrl: 'count-down.css',
  shadow: true,
})
export class CountDown {
  @Prop() fromSeconds: number = 60;
  @State() timeLeft: number;
  private interval: any;

  connectedCallback() {
    this.timeLeft = this.fromSeconds;
    this.interval = setInterval(() => this.timeLeft--, 1000);
  }

  @Event() outOfTime: EventEmitter<string>;

  @Watch('timeLeft')
  clearIt() {
    if (this.timeLeft === 0) {
      clearInterval(this.interval);
      this.outOfTime.emit('sorry!');
    }
  }

  render() {
    return <div class="clock">{this.timeLeft} seconds</div>;
  }
}
