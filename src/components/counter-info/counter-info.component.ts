import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { select as select } from 'ng2-redux';
import 'rxjs/add/operator/combineLatest';
//let select = select_x;
export let x = state => state.counter;
export let  y = state => state.counter * 2;
interface ICoord {
  x: number;
  y: number;
}

@Component({
  selector: 'app-counter-info',
  templateUrl: './counter-info.component.html',
  styleUrls: ['./counter-info.component.scss']
})
export class CounterInfoComponent implements OnInit {

  @select(x) funcCounter$: Observable<number>;
  @select('counter') stringKey$: Observable<number>;
  @select(y) counterX2$: Observable<number>;
  foo: ICoord;

  ngOnInit() {
    this.counterX2$
        .combineLatest(
            this.stringKey$,
            (x: number, y: number) => ({ x: x * 2, y: y * 3 }))
        .subscribe((c: ICoord) => this.foo = c);
  }
}
