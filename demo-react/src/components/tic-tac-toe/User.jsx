import React, { Component } from 'react';

class User extends Component {
    state = {}
    render() {
        return (
            <div className="d-flex justify-content-center col-4">
                <div className="user-wrapper">
                    <div className="py-2 d-flex-justify-content-center">
                        <div>
                            <img src={this.props.user.avatar} alt="" width={200} height={200} />
                        </div>
                        <div className="mt-2 text-center p-1">
                            <b>{this.props.user.name}</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default User;