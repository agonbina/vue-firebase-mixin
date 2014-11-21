var ref = new Firebase('https://ovally.firebaseio.com');
var firebaseMixin = require('../..');

module.exports = {
  mixins: [ firebaseMixin ],

  fb: {
    arrays: [
      ref.child('people').orderByChild('age').limitToFirst(1) // Youngest person out of all in the list
    ],
    values: [
      ref.child('presence'),
      ref.child('name')
    ]
  }
};
