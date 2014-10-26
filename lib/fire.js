
/**
 * Module dependencies
 */

var set = require('./set');
var getRef = require('./get');
var remove = require('./remove');

/**
 * A Firebase store within a view model
 *
 * @param vm - a Vue instance
 * @constructor
 */

var Fire = function (vm) {
    this._vm = vm;
    this._stores = {};
};

Fire.prototype = {
    setObject: set.asObject,
    setArray: set.asArray,
    ref: getRef,
    remove: remove
};

Fire.prototype._getPathConfig = function (path) {
    return this._stores[path] || null;
};

module.exports = Fire;