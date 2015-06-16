'use strict';

import React from 'react';

import bootstrap from 'bootstrap';

import $ from 'jquery';

export class CommentBox extends React.Component {

    render() {
    return <div className="commentBox">Hello, world! I am {this.props.name}.</div>;
  }
}

React.render(<CommentBox name="Mark"/>, document.getElementById('container'));
