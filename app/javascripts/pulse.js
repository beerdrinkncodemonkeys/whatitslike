'use strict';

import React from 'react';

export class Pulse extends React.Component {

    render() {

        
        return React.createElement("div", {className: "pulse text-center"},
                    React.createElement("h1", null, "Crime Pulse", 
                        React.createElement("hr", null, null)
                    )
            );
    }

}

React.render(<Pulse/>, document.getElementById('container') );
