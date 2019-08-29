import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

class Nav extends Component {
    constructor() {
        super()

    }

    render() {
        return (
            <div>
                <div>
                    <h3>
                        {this.props.username}
                    </h3>
                </div>
                <div>
                    <img src={this.props.profile_pic} alt='profile_pic'/>
                </div>
                <div>
                    <Link to='/dashboard'>
                        <button>Home</button>
                    </Link>
                    <Link to='/new'>
                        <button>New Post</button>
                    </Link>
                    <Link to='/'>
                        <button>Logout</button>
                    </Link>
                </div>
            </div>
        )
    }
}

function mapStateToProps(reduxState) {
    const { username, profile_pic } = reduxState
    return { username, profile_pic }
}

export default connect(
    mapStateToProps
)(Nav)