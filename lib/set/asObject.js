
var bindListeners = require('./bindListeners');

module.exports = function (path, ref) {
    var vm = this._vm;
    var listeners = {};

    listeners['value'] = function onValue(snap) {
        vm.$set(path, snap.val());
    };

    bindListeners(this, path, ref, listeners);
};