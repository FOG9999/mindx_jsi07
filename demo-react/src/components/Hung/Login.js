import React, { Component } from 'react';
import './Login.css'

class Login extends Component {
    state = {
        username: '',
        password: ''
    }
    render() {
        return (
            // Khi đặt tên các thẻ (tag) HTMl trong React, thì thuộc tính class -> className
            <div className='login-container'>
                {
                    /**
                     * Khi inline style trong React, thuộc tính style nhận giá trị là một object, và các thuộc tính css phải được 
                     * viết theo camel-case
                     */
                }
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