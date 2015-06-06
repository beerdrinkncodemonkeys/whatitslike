'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _View2 = require('./view.html');

'use strict';

var Pulse = (function (_View) {
    function Pulse() {
        _classCallCheck(this, Pulse);

        _get(Object.getPrototypeOf(Pulse.prototype), 'constructor', this).call(this, '<div class=\'pulse text-center\' id =\'pulse-1\'><h1>Crime Pulse</h1><hr></div>');
    }

    _inherits(Pulse, _View);

    return Pulse;
})(_View2.View);

exports.Pulse = Pulse;