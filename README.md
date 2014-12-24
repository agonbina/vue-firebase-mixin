vue-firebase
============
NOTE: no longer maintained, use [vue-fire](https://github.com/agonbina/vue-fire) instead.

A mixin which enables syncing $data of a Vue.js view model with a Firebase reference.

## Usage
```
npm install --save vue-firebase-mixin
```

## Example
```javascript
var firebaseMixin = require('vue-firebase-mixin');
var ref = new Firebase('https://your-firebase.firebaseio.com');

var app = new Vue({
  mixins: [ firebaseMixin ],
  template: '<ul>' +
              '<li v-repeat="people">{{name}} : {{age}}</li>' +
            '</ul>',
  fb: {
    arrays: [
      ref.child('people').orderBy('age').limitToLast(3)
    ],
    values: [
      ref.child('status'),
      ref.child('name')
    ]
  }
});

app.$mount('#app');
```
This mixin attaches a ```$fb``` property on the view model, which has the following API:

## API for vm.$fb

### .setValue(ref|Firebase)
  Creates a new keypath in ```$data``` with the ```.key()``` of the Firebase ```ref```.
  Attaches a listener on the ```'value'``` event and updates the value stored in the keypath.

### .setArray(ref|Firebase)
  Creates an array with the reference key in $data and attaches listeners
  on the Firebase list events(child_added, child_removed, child_moved, child_changed).

### .remove(path|String, [ removeLocal|Boolean ])
  Removes the Firebase listeners for the given path, so the value stored in ```$data```
  is no longer updated.
  If ```removeLocal``` is set to ```true```, it ```$delete```s the keypath from the view model.

### .ref(path|String)
  Retrieve the Firebase ```ref``` instance previously specified in ```fb``` or during a ```.set*``` operation.
  Note: If the reference is a Firebase Query, ```.ref(path)``` will still return the reference to
  ```firebaseUrl/**path**``` and not the query instance that was passed in.
