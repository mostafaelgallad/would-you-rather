import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAuthedUser } from "../actions/authedUser";
import { MemoryRouter } from "react-router-dom";
export class Login extends Component {
  handleLogin = () => {
    const selectedUser = document.getElementById("login_users_list");
    selectedUser.value === " "
      ? (selectedUser.style.borderColor = "red")
      : this.props.dispatch(loginAuthedUser(selectedUser.value));

    console.log(MemoryRouter, "sfasfasfd");
  };
  render() {
    const { users } = this.props;
    console.log(
      "userlogin",
      Object.keys(users).map((user) => console.log(user))
    );
    return (
      <div className="login_container">
        <div>
          <p>Welcome to Would you Rather App select a user to begin</p>
        </div>
        <select
          id="login_users_list"
          className="login_users_list"
          defaultValue={" "}
        >
          <option key="0" value=" " disabled>
            Select a user
          </option>
          {Object.keys(users).map((userID) => (
            <option key={users[userID].id} value={users[userID].id}>
              {users[userID].id}
            </option>
          ))}
        </select>
        <button onClick={this.handleLogin} className="login_btn">
          Login
        </button>
      </div>
    );
  }
}
const mapStateToProps = ({ users }) => ({
  users: users,
});
export default connect(mapStateToProps)(Login);
