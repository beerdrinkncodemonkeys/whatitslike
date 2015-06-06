'use strict';

import { Message } from './message.html';

import { Navbar } from './navbar.html';

import { Pulse } from './pulse.html';

import { Beat } from './beat.html';

$( function() {    

    let beat = new Beat();

    let navbar = new Navbar();

    let pulse = new Pulse();

    let message = new Message();
    
    $( '#app' ).append( navbar.el );

    $( '#app' ).append( pulse.el );

    $( '#app' ).append( message.el );

    $( '#pulse-1').append( beat.el );

} );