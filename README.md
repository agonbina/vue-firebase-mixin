vue-firebase
============

```javascript
var Fire = require('vue-firebase')(firebaseUrl);

var App = new Fire({
  firebase: [{
      path: 'emails', // => Maps to firebaseUrl/emails
      type: 'list',   // => Listens for the child_added, child_removed, child_changed events
      watch: true     // => default is true, will sync changes to the data['emails'] array to Firebase
    }, {
      path: 'messages',
      type: 'list',
      watch: false
    },
    'inbox'
  ]
});

App.$append(body);
```
