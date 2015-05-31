'use strict';

var _import = require('underscore');

var _message = require('./message.html');

var _navbar = require('./navbar.html');

var _pulse = require('./pulse.html');

var aMessage = 'Webber-fucking-Agnew?';

$(function () {

    $('#app').append(_navbar.navbar);

    $('#app').append(_pulse.pulse);
});