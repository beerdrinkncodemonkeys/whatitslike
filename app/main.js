'use strict';

import { _ } from 'underscore';

import { message } from './message.html';

import { navbar } from './navbar.html';

import { pulse } from './pulse.html';

import { beat } from './beat.html';

$( function() {

    $( '#app' ).append( navbar );

    $( '#app' ).append( pulse );

    $( '#pulse-1').append( beat );

} );


