
module.exports = function bindListeners(fire, path, ref, listeners) {
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
};