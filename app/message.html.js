'use strict';

import { View } from './view.html';

export class Message extends View {

    constructor() {

        super( `<div class='pulse text-center' id ='pulse-2'><h1>An awesome message</h1><hr></div>` );
    }
}

