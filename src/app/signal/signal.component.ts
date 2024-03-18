import { NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions = signal<string[]>([]);
  counter = signal(0);

  increment() {
    // this.counter.update((oldValue) => oldValue + 1); /** takes a function */
    this.counter.set(this.counter() + 1); /** takes a new value */
    this.actions.mutate((oldActions) => oldActions.push('INCREMENT'));
  }

  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    this.actions.mutate((oldActions) =>
      oldActions.push('DECREMENT')
    ); /** Mutation for arrays */
  }
}
