
var bindListeners = require('./bindListeners');

module.exports = function (ref) {
    var vm = this._vm;
    var path = ref.ref().name();
    var listeners = {};

    // Initialize the keypath in the view model
    vm.$set(path, []);

    // Get a reference to the newly created array
    var array = vm.$get(path);

    listeners['child_added'] = function childAdded(snap, prevId) {
        var newItem = snap.val();
        var position = findPositionAfter(array, prevId);

        newItem._id = snap.name();
        array.splice(position, 0, newItem);
    };

    listeners['child_removed'] = function childRemoved(snap) {
        var position = findPosition(array, snap.name());

        if(position > -1) array.splice(position, 1);
    };

    listeners['child_changed'] = function childChanged(snap) {
        var position = findPosition(array, snap.name());

        if(position > -1) {
            var newData = snap.val();
            newData._id = snap.name();

            array.$set(position, newData);
        }
    };

    listeners['child_moved'] = function childMoved(snap, prevId) {
        var currPosition = findPosition(array, snap.name());

        if(currPosition > - 1) {
            var data = array.splice(currPosition, 1)[0];
            var newPosition = findPositionAfter(array, prevId);
            array.splice(newPosition, 0, data);
        }
    };

    bindListeners(this, path, ref, listeners);
};

// Helpers for asArray

function findPosition(array, id) {
    var position = -1;

    for(var i = 0, len = array.length; i < len; i += 1) {
        if(array[i]._id === id) position = i;
    }

    return position;
}

function findPositionAfter(array, prevId) {
    var position = -1;

    if(!prevId) {
        position = 0;
    } else {
        var prevPosition = findPosition(array, prevId);

        if(prevPosition === -1) position = array.length;
        else position = prevPosition + 1;
    }

    return position;
}