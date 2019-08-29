import React, {Component} from 'react'
import axios from 'axios'

export default class Auth extends Component {
    constructor() {
        super()
        
        this.state = {
            usernameInput: '',
            passwordInput: ''
        }
    }

    handleChange(e, key) {
        console.log(this.state)
        this.setState({
            [key]: e.target.value
        })
    }

    registerUser = () => {
        const { usernameInput: username, passwordInput: password } = this.state
        axios
            .post('./api/auth/register', {username, password})
            .then(res => {
                console.log(res.data.user)
                this.props.history.push('/dashboard')
            })
            .catch(() => {
                alert('Username already in use')
            })
    }

    loginUser = () => {
        const { usernameInput: username, passwordInput: password } = this.state
        axios.post('./api/auth/login', {username, password})
        .then(res => {
            console.log(res.data.user)
            this.props.history.push('/dashboard')
        })
        .catch(() => {
            alert('Incorrect username and/or password')
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
                    <button onClick={this.loginUser}>Login</button>
                    <button onClick={this.registerUser}>Register</button>
                </div>
            </div>
        )
    }
    
}