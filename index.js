
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

        vm.$fb = fb;
    }
};