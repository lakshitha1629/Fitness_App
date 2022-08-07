import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  template: ''
})
export class BaseComponent implements OnDestroy {
  public readonly subscriptions: Subscription[] = [];

  constructor() { }

  ngOnDestroy(): void {
    for (const subscription of this.subscriptions) {
      subscription.unsubscribe();
    }
  }
}
