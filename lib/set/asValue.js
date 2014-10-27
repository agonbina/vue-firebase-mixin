
var bindListeners = require('./bindListeners');

module.exports = function (ref) {
    var vm = this._vm;
    var path = ref.ref().name();
    var listeners = {};

    // Initialize it with a null value
    vm.$set(path, null);

    listeners['value'] = function onValue(snap) {
        vm.$set(path, snap.val());
    };

    bindListeners(this, path, ref, listeners);
};