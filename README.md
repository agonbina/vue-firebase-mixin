vue-firebase
============
**WIP - Expect breaking changes until it reaches 0.1**

```javascript
var firebaseMixin = require('vue-firebase-mixin');
var ref = new Firebase('https://your-firebase.firebaseio.com');

var App = new Vue({
  mixins: [ firebaseMixin ],
  fb: {
    arrays: [
      ref.child('ovals').limit(3),
      ref.child('members'),
      ref.child('people')
    ],
    values: [
      ref.child('status'),
      ref.child('name')
    ]
  }
});

App.$append(body);
```

### vm.$fb.setValue(path, config)
  Sets the firebase reference to update the given ```path``` in ```vm.$data```.



### vm.$fb.remove(path)
  Removes the firebase reference in the specified ```path```.
  If ```watch: true``` it stops watching the data in ```path``` for local changes.

