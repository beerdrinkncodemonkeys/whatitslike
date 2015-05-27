'use strict';

var _underscore = require('underscore');

var _messageHtml = require('./message.html');

var _navbarHtml = require('./navbar.html');

var aMessage = 'Webber-fucking-Agnew?';

$('#app').append(_navbarHtml.navbar);

$('#app').append((0, _messageHtml.message)({ message: aMessage }));