import React, { Component } from 'react';

class Header extends Component {
    state = {}
    render() {
        return (
            <div>
                Image avatar:
                <img src={this.props.avatar} alt="" />
            </div>
        );
    }
}

export default Header;