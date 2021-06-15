import React, { Component } from "react";
import { connect } from "react-redux";
import { handleQuestionAnswer } from "../actions/shared";
export class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleChange = (e) => {
    const { value } = e.target;
    console.log("A name was submitted: ", value);
    this.setState({
      answer: value,
    });
  };
  handleSubmit = (event) => {
    console.log("A name was submitted: ", this.state.answer);
    const prepareAnswer = {
      qid: this.props.match.params.question_id,
      answer: this.state.answer,
    };
    this.props.dispatch(handleQuestionAnswer(prepareAnswer));
    event.preventDefault();
  };
  render() {
    const { users, questions } = this.props;
    const question = questions[this.props.match.params.question_id];
    const user = users[question.author];
    return (
      <form onSubmit={this.handleSubmit} className="question_container">
        <div className="question_header">
          <p>{question.author} asks:</p>
          <progress id="file" value="32" max="100">
            32%
          </progress>
        </div>
        <div className="question_image">
          <img src={user.avatarURL} alt="avatar" />
        </div>
        <div className="question_body">
          <h3>Would You rather? </h3>
          <div>
            <input
              type="radio"
              name="option"
              value="optionOne"
              onChange={this.handleChange}
            />
            <label>{question.optionOne.text}</label>
          </div>
          <div>
            <input
              type="radio"
              name="option"
              value="optionTwo"
              onChange={this.handleChange}
            />
            <label>{question.optionTwo.text}</label>
          </div>
          <button className="question_viewPoll">Submit</button>
        </div>
      </form>
    );
  }
}
function mapStateToProps({ questions, users }) {
  return {
    questions,
    users,
  };
}

export default connect(mapStateToProps)(QuestionAnswer);
