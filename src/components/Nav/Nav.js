import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import axios from 'axios'
import { logoutUser } from '../../ducks/reducer'
import { withRouter } from 'react-router-dom'

class Nav extends Component {
  constructor() {
    super();
  }

  logout = () => {
    axios.delete("/api/auth/logout").then(() => {
      this.props.logoutUser()
      this.props.history.push("/");
    });
  };

  render() {
    return (
      <div>
        <div>
          <h3>{this.props.username}</h3>
        </div>
        <div>
          <img src={this.props.profile_pic} alt="profile_pic" />
        </div>
        <div>
          <Link to="/dashboard">
            <button>Home</button>
          </Link>
          <Link to="/new">
            <button>New Post</button>
          </Link>
          <button onClick={this.logout}>Logout</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { username, profile_pic } = reduxState;
  return { username, profile_pic };
}

export default connect(mapStateToProps, { logoutUser })(withRouter(Nav));
