import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";

class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      searchInput: "",
      userPostsShown: true,
      allPosts: []
    };
  }

  componentDidMount() {
    axios.get("/api/posts").then(res => {
      this.setState({
        allPosts: res.data
      });
    });
  }

  handleChange(e, key) {
    this.setState({
      [key]: e.target.value
    });
  }

  toggleUserPostsShown() {
    this.setState({
      userPostsShown: !this.state.userPostsShown
    });
  }

  searchPosts = () => {
    // console.log(this.state)
    axios.get(`/api/posts/${this.props.id}?search=${this.state.searchInput}&userposts=${this.state.userPostsShown}`)
    .then(res => {
      this.setState({
        allPosts: res.data
      })
    })
  }

  resetSearch = () => {
    axios.get(`/api/posts`)
    .then(res => {
      console.log(this.state)
      this.setState({
        searchInput: '',
        userPostsShown: true,
        allPosts: res.data
      })
    })
  }

  render() {
    return (
      <div>
        <div>
          <input
            onChange={e => this.handleChange(e, "searchInput")}
            type="text"
            placeholder="search by title"
            value={this.state.searchInput}
          />
        </div>
        <div>
          <button onClick={this.searchPosts}>Search</button>
          <button onClick={this.resetSearch}>Reset</button>
          <div>
            <input
              type="checkbox"
              checked={this.state.userPostsShown}
              onChange={() => this.toggleUserPostsShown()}
            />
            My posts
          </div>
          <div>
            <h2>Posts</h2>
            {this.state.allPosts.map(post => {
              return (
                <div>
                  <h3>{post.title}</h3>
                  <h4>{post.username}</h4>
                  <img src={post.profile_pic} alt="post-pic" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    id: reduxState.id
  };
}

export default connect(mapStateToProps)(Dashboard);
