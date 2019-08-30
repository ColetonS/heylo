import React, { Component } from "react";
import axios from 'axios'

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
        searchInput: '',
        userPostsShown: true,
        allPosts: []
    }
  }

  componentDidMount() {
      axios.get('/api/posts').then(res => {
          this.setState({
              allPosts: res.data
          })
      })
  }

  handleChange(e, key) {
      this.setState({
          [key]: e.target.value
      })
  }

  toggleUserPostsShown() {
      this.setState({
          userPostsShown: !this.state.userPostsShown
      })
  }


  render() {
    return (
      <div>
        <div>
          <input onChange={e => this.handleChange(e, 'searchInput')} type="text" placeholder="search by title" />
        </div>
        <div>
          <button>Search</button>
          <button>Reset</button>
          <div>
            <input type="checkbox" checked={this.state.userPostsShown} onChange={() => this.toggleUserPostsShown()}/>
            My posts
          </div>
          <div>
              <h2>Posts</h2>
              {this.state.allPosts.map(post => {
                  console.log(post)
                  return (
                      <div>
                          <h3>{post.title}</h3>
                          <h4>{post.username}</h4>
                          <img src={post.profile_pic} alt='post-pic' />
                      </div> 
                  )
              })}
          </div>
        </div>
      </div>
    );
  }
}
