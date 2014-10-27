
/**
 * A getter for a Firebase reference stored
 * for the given path in the Fire instance
 *
 * @param path
 * @returns Firebase instance
 */

module.exports = function (path) {
    var store = this._getPathConfig(path);

    if(!store) {
        return console.error('A Firebase reference for "%s" does not exist', path);
    }

    return store.ref.ref();
};