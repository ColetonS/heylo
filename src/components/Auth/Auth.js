import React, {Component} from 'react'
import axios from 'axios'
import { connect } from 'react-redux'
import { setUser } from '../../ducks/reducer'

class Auth extends Component {
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

    registerUser = () => {
        const { usernameInput: username, passwordInput: password } = this.state
        axios
            .post('./api/auth/register', {username, password})
            .then(res => {
                const { id, username, profile_pic } = res.data.user
                this.props.setUser({ id, username, profile_pic })
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
            const { id, username, profile_pic } = res.data.user
            this.props.setUser({ id, username, profile_pic })
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

function mapStateToProps(reduxState) {
    const { id, username, profile_pic } = reduxState
    return { id, username, profile_pic }
}

export default connect(
    mapStateToProps,
    { setUser }
)(Auth)