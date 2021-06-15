import React, { Component } from "react";
import { connect } from "react-redux";
import QuestionAnswer from "../components/QuestionAnswer";
import QuestionsList from "../components/QuestionsList";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "../components/NavBar";
import NewQuestion from "../components/NewQuestion";
//import NewQuestion from "../components/NewQuestion";
export class Home extends Component {
  render() {
    console.log("home", this.props.users);
    return (
      <Router>
        <NavBar />
        <Route path="/question/:question_id" component={QuestionAnswer} />
        <Route path="/" exact component={QuestionsList} />
        <Route path="/add" exact component={NewQuestion} />
      </Router>
    );
  }
}

const mapStateToProps = ({ users }) => ({
  users: users,
});
export default connect(mapStateToProps)(Home);
