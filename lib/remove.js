
/**
 * Stop listening for updates on the reference stored in the given path
 *
 * @param path - Path name of the Fire store to remove
 * @param removeLocal - Remove the data from $data as well. default is false.
 */

module.exports = function (path, removeLocal) {
    var fire = this;
    var store = fire._stores[path];

    if(!store) {
        return console.error('A Firebase reference for "%s" does not exist', path);
    }

    // Remove callbacks listening for changes on the Firebase reference
    Object.keys(store.listeners).forEach(function (eventName) {
       var cb = store.listeners[eventName];

        store.ref.off(eventName, cb);
    });

    // Delete the configuration for this path
    delete fire._stores[path];

    // Remove the data for this path in $data
    if(removeLocal) {
        fire._vm.$delete(path);
    }
};