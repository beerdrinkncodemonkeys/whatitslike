'use strict';

import { _ } from 'underscore';

import { messageTpl } from './messageTpl';

import { navbarTpl } from './navbarTpl';

var aMessage = 'Webber-fucking-Agnew?';

var header = _.template( messageTpl );

var navbar = _.template( navbarTpl );

$( '#app' ).append( navbar );

$( '#app' ).append( header( {message: aMessage}) );