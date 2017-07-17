/**
 * This is also stuck in its own module just for the demo. It doesn't
 * have to go in its own directory.
 * In fact, the StoreModule.provideStore() is usually done in the
 * AppModule's imports
 */
import {NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store/index';
// Delete the demo stuff here
// and the places below denoted by: //<--
import { DemoComponent } from './demo/demo.component';
import { DemoService } from './demo/demo.service';
import { DemoModule } from './demo/demo.module';


@NgModule({
  imports: [
    CommonModule,
    StoreModule.provideStore(reducer),
    DemoModule //<--
  ],
  declarations: [

  ],
  exports: [
    DemoComponent
  ],
  providers: [
      DemoService
  ]
})
export class NgrxExampleModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: NgrxExampleModule,
      providers: [

      ]
    };
  }
}
