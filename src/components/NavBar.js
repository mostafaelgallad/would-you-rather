import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logoutAuthedUser } from "../actions/authedUser";
export class NavBar extends Component {
  logout = () => {
    this.props.dispatch(logoutAuthedUser());
  };
  render() {
    return (
      <div className="topnav">
        <Link className="active" to="/">
          Home
        </Link>
        <Link to="/add">New question</Link>
        <Link to="/leaderboard">Leaderboard</Link>

        <a href="#ll">Welcome {this.props.authedUser}</a>
        <img src="/assets/avatar1.png" alt="logo" width="30" height="30" />
        <button onClick={this.logout}>Logout</button>
      </div>
    );
  }
}

function mapStateToProps({ authedUser }) {
  return {
    authedUser,
  };
}

export default connect(mapStateToProps)(NavBar);
