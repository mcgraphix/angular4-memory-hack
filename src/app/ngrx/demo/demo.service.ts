import { Injectable } from '@angular/core';

/*NGRX_DEMO:*/
import { Store } from '@ngrx/store';
import * as fromRoot from '../store';
import {UI_ACTIONS} from '../store/ui.store';

@Injectable()
export class DemoService {

  constructor(private store:Store<fromRoot.State>) { }

  loadSomething() {

    /*NGRX_DEMO:*/
    console.log("Simulating load...");
    this.store.dispatch({ type: UI_ACTIONS.START_LOADING });
    setTimeout(() => {
        console.log("Done.");
        this.store.dispatch({ type: UI_ACTIONS.STOP_LOADING});
    }, 2000);
  }
}
