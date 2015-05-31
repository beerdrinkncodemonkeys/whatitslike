'use strict';

import { _ } from 'underscore';

import { message } from './message.html';

import { navbar } from './navbar.html';

import { pulse } from './pulse.html';

let aMessage = 'Webber-fucking-Agnew?';

$( function() {

    $( '#app' ).append( navbar );

    $( '#app' ).append( pulse );    

} );


