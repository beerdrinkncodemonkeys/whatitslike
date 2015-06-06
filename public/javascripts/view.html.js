'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _import = require('underscore');

'use strict';

var View = (function () {
    function View(el) {
        _classCallCheck(this, View);

        this._el = _import._.template(el);
    }

    _createClass(View, [{
        key: 'el',
        get: function () {

            return this._el;
        },
        set: function (el) {

            if (el) {

                this._el = _import._.template(el);
            } else {

                throw 'View set el( ... ) called with falsy value.';
            }
        }
    }]);

    return View;
})();

exports.View = View;