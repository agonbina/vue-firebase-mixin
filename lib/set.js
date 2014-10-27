
function bindListeners(fire, path, ref, listeners) {
    var store = {
        path: path,
        ref: ref,
        listeners: listeners
    };

    // Set up the listeners
    Object.keys(listeners).forEach(function (eventName) {
        var cb = listeners[eventName];
        ref.on(eventName, cb);
    });

    // Store a reference to related firebase configuration for the given path
    fire._stores[path] = store;
}

exports.asObject = function (path, ref) {
    var vm = this._vm;
    var listeners = {};

    listeners['value'] = function onValue(snap) {
        vm.$set(path, snap.val());
    };

    bindListeners(this, path, ref, listeners);
};

exports.asArray = function (path, ref) {
    var listeners = {};

    listeners['child_added'] = function childAdded(snap) {

    };

    listeners['child_removed'] = function childRemoved(snap) {

    };

    listeners['child_moved'] = function childMoved(snap) {

    };

    bindListeners(this, path, ref, listeners);
};