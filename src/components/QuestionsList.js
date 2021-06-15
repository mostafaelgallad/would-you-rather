import React, { Component } from "react";
import { connect } from "react-redux";
import Question from "./Question";

export class QuestionsList extends Component {
  handleTabChange = (toggleTab) => {
    if (toggleTab) {
      document.getElementById("answeredQuestions").style.display = "block";
      document.getElementById("unAnsweredQuestions").style.display = "none";
      document
        .getElementById("answerdQuestions_btn")
        .classList.add("questionList_tabs_active");
      document
        .getElementById("unAnswerdQuestions_btn")
        .classList.remove("questionList_tabs_active");
    } else {
      document.getElementById("unAnsweredQuestions").style.display = "block";
      document.getElementById("answeredQuestions").style.display = "none";
      document
        .getElementById("unAnswerdQuestions_btn")
        .classList.add("questionList_tabs_active");
      document
        .getElementById("answerdQuestions_btn")
        .classList.remove("questionList_tabs_active");
    }
  };
  render() {
    console.log("qiestions", this.props);
    const { questions, questionID, authedUser } = this.props;
    let answeredQuestions = [];
    let unAnswerdQuestions = [];
    questionID.map((qid) => {
      if (
        questions[qid]?.optionOne.votes.includes(authedUser) ||
        questions[qid]?.optionTwo.votes.includes(authedUser)
      ) {
        answeredQuestions.push(questions[qid]);
      } else {
        unAnswerdQuestions.push(questions[qid]);
      }
      return null;
    });
    console.log("answerd", answeredQuestions);
    console.log("unanswerd", this.props.users);
    return (
      <div className="questionList_container ">
        <div className="questionList_tabs">
          <button
            id="answerdQuestions_btn"
            onClick={() => this.handleTabChange(true)}
          >
            Answerd Quesstions
          </button>
          <button
            id="unAnswerdQuestions_btn"
            className="questionList_tabs_active"
            onClick={() => this.handleTabChange(false)}
          >
            UnAnswerd Quesstions
          </button>
        </div>
        <div className="questionList">
          <ul>
            <div id="answeredQuestions" style={{ display: "none" }}>
              {answeredQuestions.map((question) => {
                return (
                  <li key={question.id}>
                    <Question question={question} />
                  </li>
                );
              })}
            </div>
            <div id="unAnsweredQuestions">
              {unAnswerdQuestions.map((question) => {
                return (
                  <li key={question.id}>
                    <Question question={question} />
                  </li>
                );
              })}
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  return {
    questions,
    authedUser,
    users,
    questionID: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}
export default connect(mapStateToProps)(QuestionsList);
