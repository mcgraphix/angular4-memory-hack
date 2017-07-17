import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';


import { Store } from '@ngrx/store';
import * as fromRoot from '../../ngrx/store';
import {Observable} from 'rxjs';
import {DemoService} from './demo.service';


@Component({
  selector: 'app-ngrx-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DemoComponent implements OnInit {

  /*NGRX_DEMO:*/
  // properties used in ngrx demo here
  isLoading = false;
  isLoading$: Observable<boolean>;
  // end ngrx demo props
  constructor(private service: DemoService,
              private store: Store<fromRoot.State>
              ) {

    // We are going to select from the aggregate store using the getIsLoading() function that we exposed
    // in the ngrx/store/index.ts file. The Observable that it returns can be subscribed to so that
    // you can respond to changes.
    store.select(fromRoot.getIsLoading).subscribe((isLoading: boolean) => {
      this.isLoading = isLoading;
    });


    // In some cases, you may just want to use the emitted value directly using the async pipe.
    // in which case, you can just store a reference to the observable
    // By convention, when doing this, you should suffix the property name with a $
    this.isLoading$ = store.select(fromRoot.getIsLoading);
    // Then to use this property's value in your view, you can use:
    //
    // {{isLoading$ | async}}
    //
    // See the app.component.html file for an example
  }

  ngOnInit() {
  }

  loadSomething() {
    this.service.loadSomething();
  }

}
