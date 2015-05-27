'use strict';

var _import = require('underscore');

var _messageTpl = require('./messageTpl');

var _navbarTpl = require('./navbarTpl');

var aMessage = 'Webber-fucking-Agnew?';

var header = _import._.template(_messageTpl.messageTpl);

var navbar = _import._.template(_navbarTpl.navbarTpl);

$('#app').append(navbar);

$('#app').append(header({ message: aMessage }));