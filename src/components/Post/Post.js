import React, {Component} from 'react'
import axios from 'axios'

export default class Post extends Component {
    constructor() {
        super()

        this.state = {
            // postTitle: '',
            // img: '',
            // content: '',
            // username: '',
            // profilePic: ''
            activePost: {}
        }
    }

    componentDidMount(){
        console.log(this.props)
        const postID = this.props.match.params.postid
        console.log(postID)
        axios.get(`/api/posts/post/${postID}`)
        .then(res => {
            console.log(res)
            this.setState({
                activePost: res.data[0]
            })
        })
    }
       
    

    render() {
        console.log(this.state.activePost)
        return (
            <div>
                <div>
                    <h1>{this.state.activePost.title}</h1>
                    <img src={this.state.activePost.img} alt='post-image'/>
                    <span>{this.state.activePost.content}</span>
                    <h2>{this.state.activePost.username}</h2>
                    <img src={this.state.activePost.profile_pic} alt='profile-picture'/>
                </div>
            </div>
        )
    }
}