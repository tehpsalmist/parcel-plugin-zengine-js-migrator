# parcel-plugin-zengine-html-migrator

Parcel plugin that interpolates v1 plugin JS into v2 JS file body

## Installation

`npm i -d parcel-plugin-zengine-js-migrator`

_Attention: parcel-bundler has to be installed_

## Usage
 
1. Add this multi-line-style comment: `/* PLUGIN_JS */` to your `src/plugin.js` (probably at the bottom of that file).
2. Ensure all of your plugin's JS lives in `plugin/plugin.js`
3. Run parcel normally

### Example

_**src/plugin.js**_

```js
import { plugin } from './wrapper.js'

/* PLUGIN_JS */
```

_**run it**_  
`parcel index.html`

_**output**_

```js
import { plugin } from './wrapper.js'

plugin.controller('myController', ['$scope', 'myService', function ($scope, srv) {
  // awesome plugin code
}])

// ...lots more great code...

plugin.register('myCoolPlugin', {
  route: '/my-cool-plugin',
  title: 'Useless Title',
  icon: 'icon-puzzle',
  interfaces: [{
    controller: 'myController',
    template: 'my-template',
    type: 'fullPage',
    order: 300,
    topNav: true,
    routes: ['/:page']
  }]
})
```
