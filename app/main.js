'use strict';

import { _ } from 'underscore';

import { message } from './message.html';

import { navbar } from './navbar.html';

var aMessage = 'Webber-fucking-Agnew?';

$( '#app' ).append( navbar );

$( '#app' ).append( message( {message: aMessage}) );
