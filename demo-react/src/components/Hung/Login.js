import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    render() {
        return (
            <div className='login-container'>
                <div className="small-container" style={{
                    fontSize: '32px'
                }}>
                    Test Font size with inline style
                </div>
            </div>
        );
    }
}

export default Login;