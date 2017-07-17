import { enableProdMode, NgModuleRef } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

declare var window: any;

// this has to bee the unique tag name of the angular app
let ROOT_NODE: string = 'app-root';

let platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule).then((ref: NgModuleRef<AppModule>) => {
  console.log('NG: Bootstrapped. Watching for root node to be removed');
  // Watch the app's parent node for changes to its children. If anything
  // is removed check to see if the removed node is the application root
  // and if so destroy the platform and remove all the references on the window
  // that get left behind 
  let observer = new MutationObserver(function(e: any) {
            let shouldDestroy = false;
            if (e[0].removedNodes.length > 0) {
                e[0].removedNodes.forEach((node: {nodeName: string}) => {
                    if (node.nodeName.toLowerCase() === ROOT_NODE) {
                      shouldDestroy = true;
                    }
                });

            }

            if (shouldDestroy) {
              console.log('NG: Root node was removed. Destroying app.', e[0].tagName);
              platform.destroy();
              platform = null;
              
              console.log('NG: Trying to free memory');
              delete window.webpackJsonp;
              delete window.frameworkStabilizers;
              delete window.getAngularTestability;
              delete window.getAllAngularTestabilities;
              delete window.getAllAngularRootElements;
              delete window.ng;

              console.log('NG: disposing mutation observer');
              observer.disconnect();

              console.log('NG: Tear down complete');
              
            }
          }
  );
  observer.observe(document.getElementsByTagName(ROOT_NODE)[0].parentElement, {childList:true});
});
