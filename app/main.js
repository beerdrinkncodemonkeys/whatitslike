'use strict';

import { _ } from 'underscore';

import { message } from './messageTpl';

import { navbar } from './navbarTpl';

var aMessage = 'Webber-fucking-Agnew?';

$( '#app' ).append( navbar );

$( '#app' ).append( message( {message: aMessage}) );
