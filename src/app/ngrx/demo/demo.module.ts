import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoComponent } from './demo.component';
import { DemoService } from './demo.service';


@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DemoComponent
    ],
    exports: [
        DemoComponent
    ],
    entryComponents: [
        DemoComponent
    ],
    providers: [DemoService]
})
export class DemoModule {

}
