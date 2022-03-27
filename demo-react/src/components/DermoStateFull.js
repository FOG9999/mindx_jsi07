import React, { Component } from 'react';


class DemoStateFull extends Component {
    state = {
        username: 'thangnd'
    }
    render() {
        return (
            <div>
                Demo State full component, Hello {this.state.username}
            </div>
        );
    }
}

export default DemoStateFull;