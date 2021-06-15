import { Component } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { Home } from "../views/Home";
import Login from "./Login";
//import Login from "./Login";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  render() {
    console.log("loagh", this.props);
    return (
      <div className="App">
        {this.props.loading === true ? (
          <div>Loading</div>
        ) : this.props.isLoggedin === true ? (
          <Login />
        ) : (
          <Home />
        )}
      </div>
    );
  }
}
function mapStateToProps({ authedUser, questions }) {
  return {
    isLoggedin: authedUser === null,
    loading: Object.keys(questions).length === 0,
    questions,
  };
}
export default connect(mapStateToProps)(App);
