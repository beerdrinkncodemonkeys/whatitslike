'use strict';

var _import = require('underscore');

var _message = require('./message.html');

var _navbar = require('./navbar.html');

var aMessage = 'Webber-fucking-Agnew?';

$('#app').append(_navbar.navbar);

$('#app').append(_message.message({ message: aMessage }));