'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _View2 = require('./view.html');

'use strict';

var Navbar = (function (_View) {
    function Navbar() {
        _classCallCheck(this, Navbar);

        _get(Object.getPrototypeOf(Navbar.prototype), 'constructor', this).call(this, '<nav class="navbar navbar-default">\n            <div class="container-fluid">    \n                <div class="navbar-header">\n                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#hamburger">\n                        <span class="sr-only">Toggle navigation</span>\n                        <span class="icon-bar"></span>\n                        <span class="icon-bar"></span>\n                        <span class="icon-bar"></span>\n                    </button>\n                    <a class="navbar-brand" href="#">WIL</a>\n                </div>\n            </div>\n        </nav>');
    }

    _inherits(Navbar, _View);

    return Navbar;
})(_View2.View);

exports.Navbar = Navbar;