vue-firebase
============

```javascript
var FireVue = require('vue-firebase');

var ref = new Firebase('https://your-firebase.firebaseio.com');

var App = new Fire({
  firebase: ref.child('people')

  fb: [{
    ref: ref.child('members')
  }, {
    ref: ref.child('status'),
    array: false
  }, {
    ref: ref.child('dinosaurs'),
    watch: false
  }]

});

App.$append(body);
```

### vm.$fb.$set(path, config)
  - Sets the firebase reference to update the given ```path``` in ```vm.data```

### vm.$fb.$remove(path)
  - Removes the firebase reference in the specified ```path```
  - If ```watch: true``` it stops watching the data in ```path``` for local changes

