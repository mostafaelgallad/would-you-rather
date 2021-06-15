import React, { Component } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/shared";

export class NewQuestion extends Component {
  resetBorderColor = () => {
    this.checkIfEmpty(
      document.getElementById("optionOne_input"),
      document.getElementById("optionTwo_input")
    );
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const optioneOne = document.getElementById("optionOne_input");
    const optioneTwo = document.getElementById("optionTwo_input");
    if (optioneOne.value !== "" && optioneTwo.value !== "") {
      this.props.dispatch(
        handleAddQuestion(optioneOne.value, optioneTwo.value)
      );
      alert("A new question has been added");
      optioneOne.value = "";
      optioneTwo.value = "";
    } else {
      this.checkIfEmpty(optioneOne, optioneTwo);
    }
  };
  checkIfEmpty = (inputOne, inputTwo) => {
    inputOne.value !== ""
      ? (inputOne.style.borderColor = "#bbc1c4")
      : (inputOne.style.borderColor = "red");
    inputTwo.value !== ""
      ? (inputTwo.style.borderColor = "#bbc1c4")
      : (inputTwo.style.borderColor = "red");
  };
  render() {
    const { users, authedUser } = this.props;
    const user = users[authedUser];
    return (
      <form onSubmit={this.handleSubmit} className="question_container">
        <div className="question_header">
          <p style={{ textAlign: "center", fontWeight: "bold" }}>
            Create a new question
          </p>
        </div>
        <div className="question_image">
          <img src={user.avatarURL} alt="avatar" />
        </div>
        <div className="question_body">
          <h3>Would You rather? </h3>

          <input
            className="newQuestion_input"
            id="optionOne_input"
            placeholder="Type option one"
            onChange={this.resetBorderColor}
          />
          <input
            className="newQuestion_input"
            id="optionTwo_input"
            placeholder="Type option two"
            onChange={this.resetBorderColor}
          />
          <button className="question_viewPoll">Save</button>
        </div>
      </form>
    );
  }
}
function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    users,
  };
}
export default connect(mapStateToProps)(NewQuestion);
