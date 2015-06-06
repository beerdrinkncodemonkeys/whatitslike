'use strict';

import { View } from './view.html';

export class Navbar extends View {

    constructor() {
        super(`<nav class="navbar navbar-default">
            <div class="container-fluid">    
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#hamburger">
                        <span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand" href="#">WIL</a>
                </div>
            </div>
        </nav>`);
    }

}
