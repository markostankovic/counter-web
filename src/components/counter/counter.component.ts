import { Component, OnInit } from '@angular/core';
import { NgRedux, select } from 'ng2-redux';
import { Observable } from 'rxjs/Observable';
import { CounterActions } from '../../actions/counter.actions';
import { RandomNumberService } from '../../services/random-number.service';

@Component({
  selector: 'app-counter',
  providers: [ CounterActions, RandomNumberService ],
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  @select('counter') counter$: Observable<number>;
  @select([ 'pathDemo', 'foo' ]) foo$: Observable<Object>;
  @select([ 'pathDemo', 'foo', 'bar', 0 ]) bar$: Observable<number>;

  constructor(public actions: CounterActions) {}

  ngOnInit() {
  }

}
