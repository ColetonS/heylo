import React, {Component} from 'react'

export default class Auth extends Component {
    constructor() {
        super()
        
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
    }

    handleChange(e, key) {
        this.setState({
            [key]: e.target.value
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input onChange={e => this.handleChange(e, 'usernameInput')} type='text' placeholder='username' />
                    <input onChange={e => this.handleChange(e, 'passwordInput')} type='password' placeholder='password' />
                </div>
                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>
        )
    }
    
}