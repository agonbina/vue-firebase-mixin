
/**
 * Module dependencies
 * @type {exports}
 */

var Fire = require('./lib/fire');

module.exports = {
    compiled: function() {
        var vm = this;
        var config = vm.$options.fb;
        var fb = new Fire(vm);

        fb.setObject(config.path, config.ref);

        var ovalsRef = new Firebase('https://ovally.firebaseio.com/ovals');
        fb.setArray('ovals', ovalsRef);

        vm.$fb = fb;
    }
};