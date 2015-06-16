'use strict';

import _  from 'underscore';

export class Component {

    constructor( el ) {        

        this._el = _.template(el);

    }

    get el() {

        return this._el;
    }

    set el( el ) {

        if ( el ) {

            this._el = _.template(el);

        } else {

            throw "View set el( ... ) called with falsy value.";

        }
    }

}

