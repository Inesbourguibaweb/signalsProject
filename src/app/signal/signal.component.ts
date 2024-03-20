import { NgFor } from '@angular/common';
import { Component, computed, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal',
  templateUrl: './signal.component.html',
  standalone: true,
  imports: [NgFor],
})
export class SignalComponent {
  actions = signal<string[]>([]);
  counter = signal(0);
  doubCounter = computed(() => this.counter() * 2);

  constructor() {
    effect(() => console.log(this.counter()));
  }

  increment() {
    // this.counter.update((oldValue) => oldValue + 1); /** takes a function */
    this.counter.set(this.counter() + 1); /** takes a new value */
    this.actions.mutate((oldActions) =>
      oldActions.push('INCREMENT')
    ); /** Mutation of arrays */
  }

  decrement() {
    this.counter.update((oldValue) => oldValue - 1);
    this.actions.update((oldActions) => [...oldActions, 'DECREMENT']);
  }
}
