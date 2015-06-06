'use strict';

var _Message = require('./message.html');

var _Navbar = require('./navbar.html');

var _Pulse = require('./pulse.html');

var _Beat = require('./beat.html');

$(function () {

    var message = new _Message.Message();

    var beat = new _Beat.Beat();

    var navbar = new _Navbar.Navbar();

    var pulse = new _Pulse.Pulse();

    $('#app').append(navbar.el);

    $('#app').append(pulse.el);

    $('#app').append(message.el);

    $('#pulse-1').append(beat.el);
});