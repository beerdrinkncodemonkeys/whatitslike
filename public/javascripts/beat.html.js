'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _inherits = function (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

Object.defineProperty(exports, '__esModule', {
    value: true
});

var _View2 = require('./view.html');

'use strict';

var Beat = (function (_View) {
    function Beat() {
        _classCallCheck(this, Beat);

        _get(Object.getPrototypeOf(Beat.prototype), 'constructor', this).call(this, '\n                <div class=\'beat\'>\n                    <table class=\'table table-responsive\'>\n                        <thead>\n                            <tr>\n                                <th>Year</th>\n                                <th>Crime</th>\n                                <th>Count</th>\n                            </tr>\n                        <tbody>\n                            <tr>\n                                <th scope="row">2015</th>\n                                <td>Murder</td>\n                                <td>6</td>\n                            </tr>                    \n                            <tr>\n                                <th scope="row">2015</th>\n                                <td>Murder</td>\n                                <td>6</td>\n                            </tr>                    \n                            <tr>\n                                <th scope="row">2015</th>\n                                <td>Murder</td>\n                                <td>6</td>\n                            </tr>                    \n                            <tr>\n                                <th scope="row">2015</th>\n                                <td>Murder</td>\n                                <td>6</td>\n                            </tr>                    \n                            <tr>\n                                <th scope="row">2015</th>\n                                <td>Murder</td>\n                                <td>6</td>\n                            </tr>                    \n                            <tr>\n                                <th scope="row">2015</th>\n                                <td>Murder</td>\n                                <td>6</td>\n                            </tr>                    \n                        </tbody>\n                        </thead>\n                    </table>\n                </div>\n\n            ');
    }

    _inherits(Beat, _View);

    return Beat;
})(_View2.View);

exports.Beat = Beat;