
/**
 * Bind a view model keypath to the given Firebase reference
 *
 * @param path
 * @param ref
 */

exports.asObject = function (path, ref) {
    var fire = this;
    var vm = this._vm;
    var store = {
        path: path,
        ref: ref
    };

    store.onChange = function (snap) {
        console.log('New value for "' + path + '": ' + snap.val());
        vm.$set(path, snap.val());
    };

    // Store a reference to related firebase configuration for the given path
    fire._stores[path] = store;

    ref.on('value', store.onChange);
};

exports.asArray = function (path, ref) {

};