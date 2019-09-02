import React, {Component} from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            postTitle: '',
            postImage: '',
            postContent: ''
        }
    }

    handleChange = (e, key) => {
        this.setState({
            [key]: e.target.value
        })
    }

    addPost = () => {
        const { postTitle: title, postImage: img, postContent: content } = this.state
        axios.post('/api/posts', {
            title, 
            img,
            content
        })
        .then(res => {
            this.props.history.push('/dashboard')
        })
    }

    render() {
        return (
            <div>
                <div>
                    <input onChange={e => this.handleChange(e, 'postTitle')} type='text' placeholder='title'/>
                    <input onChange={e => this.handleChange(e, 'postImage')} type='text' placeholder='image URL' />
                    <input onChange={e => this.handleChange(e, 'postContent')} type='text' placeholder='post content' />
                    <img src={this.state.postImage} alt='post image' />
                </div>
                <button onClick={this.addPost}>Post</button>
            </div>

        )
    }
}

function mapStateToProps(reduxState) {
    return {
        id: reduxState.id
    }
}

export default connect(mapStateToProps)(Form)