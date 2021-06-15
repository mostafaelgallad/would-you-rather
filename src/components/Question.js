import React, { Component } from "react";
import _ from "lodash";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

export class Question extends Component {
  render() {
    const { users, question } = this.props;
    const user = users[question.author];
    return (
      <div className="question_container">
        <div className="question_header">
          <p>{question.author} asks:</p>
        </div>
        <div className="question_image">
          <img src={user.avatarURL} alt="avatar" />
        </div>
        <div className="question_body">
          <h3>Would You rather? </h3>
          {}
          <small>
            {_.truncate(question.optionOne.text, {
              length: 12,
            })}
          </small>
          <button className="question_viewPoll">
            <Link to={"/question/" + question.id}>View Poll</Link>
          </button>
        </div>
      </div>
    );
  }
}
function mapStateToProps({ users }) {
  return {
    users,
  };
}
export default connect(mapStateToProps)(Question);
