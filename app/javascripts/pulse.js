'use strict';

import React from 'react';

import $ from 'jquery';

export class Pulse extends React.Component {

    render() {

        return <div className="pulse text-center"><h1>Crime Pulse</h1><hr></hr></div>;
    }

}

React.render(<Pulse/>, document.getElementById('container') );
