# Angular Memory Hack
This is a project built with angular cli that shows one way to attempt to reclaim some of the memory not released after destroying an angular app.

Note: This project was 'ejected' from the CLI tool because I need the Uglify plugin for my environment. It isn't necessary for the 'fix' to work.

## To run
This doesn't work when running ```npm run start``` so you need to do a build and then run the application from the dist folder.

````
npm run build
cd dist
````
Then run this on a webserver. For my purposes, I am using node-static (https://www.npmjs.com/package/node-static)

````
static --port=4200
````

Then open your browser to http://localhost:4200

## Results
When you launch this application, there is a 'destroy' button that removes the root application node. Without the fix, the application uses 20.5 MB of memory (in Chrome on Mac OS) both before and after destroying the application. You can also see in the memory snapshots in Chrome that there are still references in memory to the ApplicationRef, PlatformRef_, etc.

With the fix in place, after destroying the application, the memory used is 15.6 MB. This doesn't get all the memory back as a blank page uses about 10.7 MB

## How it works
Basically the problem seems to stem from the application not getting released from all the places it is referenced on the window. So, once the application is bootstrapped we watch for the root application node to get removed and then manually destroy the platform and then delete anything that maintained a reference to it on the window. Finally it empties the body essentially making it contain as close to a blank html file as possible.
