/**
 * Module dependencies
 * @type {exports}
 */

var Fire = require('./lib/fire');

module.exports = {
    beforeCompile: function () {
        var vm = this;
        var fb = vm.$options.fb;
        var arrays = fb.arrays = fb.arrays || [];
        var values = fb.values = fb.values || [];

        // Create a new Fire instance to attach to the view model
        vm.$fb = new Fire(vm);

        // Set up the 'array' references
        arrays.forEach(function (ref) {
            vm.$fb.setArray(ref);
        });

        // Set up the 'value' references
        values.forEach(function (ref) {
            vm.$fb.setValue(ref);
        });
    },

    destroyed: function () {
        var vm = this;
        var fb = this.$options.fb;

        var refs = fb.arrays.concat(fb.values);

        refs.forEach(function (ref) {
            var path = ref.ref().name();
            vm.$fb.remove(path);
        });
    }
};