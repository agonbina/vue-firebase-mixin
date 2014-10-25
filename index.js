
/**
 * Module dependencies
 * @type {exports}
 */

var Vue = require('vue');
var Fire = Vue.extend({
    ready: function() {
        var $vm = this;
        var ref = $vm.$options.firebase;

        ref.on('child_added', function (snap) {
            var data = snap.val();

        });
    }
});

var ref = new Firebase('https://ovally.firebaseio.com');
var myVm = new Fire({
    firebase: ref.child('ovals')
});

myVm.$mount('#app');