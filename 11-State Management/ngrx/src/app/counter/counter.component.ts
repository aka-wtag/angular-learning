import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AppState } from '../states/app.state';
import { Store } from '@ngrx/store';
import { selectCount } from '../states/counter/counter.selector';
import { decrement, increment, reset } from '../states/counter/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css'],
})
export class CounterComponent implements OnInit {
  count$: Observable<number>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.count$ = this.store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
