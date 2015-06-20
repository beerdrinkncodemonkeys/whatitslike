'use strict';

import React from 'react';

export class Pulse extends React.Component {

    render() {

        return <div className="pulse text-center"><h1>Crime Pulse</h1><hr></hr></div>;
        return React.createElement("div", {className: "pulse text-center"},
                    React.createElement("h1", null, "Crime Pulse", 
                        React.createElement("hr", null, null)
                    )
            );
    }

}

React.render(<Pulse/>, document.getElementById('container') );
