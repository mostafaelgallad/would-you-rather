import { getInitialData, saveQuestion, saveQuestionAnswer } from "../utils/api";
import { receiveUsers, addUserAnswer, addUserQuestion } from "./users";
import {
  receiveQuestions,
  saveQuestionAnswer as addQuestionAnswer,
  addQuestion,
} from "./questions";

//handle the initial data on first load
export function handleInitialData() {
  return (dispatch) => {
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  };
}

//handle submitting the answer and update the state in the store
export function handleQuestionAnswer({ qid, answer }) {
  return (dispatch, getState) => {
    const authedUser = "tylermcginnis";

    const prepareAnswer = { authedUser, qid, answer };
    saveQuestionAnswer(prepareAnswer).then(() => {
      dispatch(addQuestionAnswer(prepareAnswer));
      dispatch(addUserAnswer(prepareAnswer));
    });
  };
}

//handle add a new question and update the state in the store
export function handleAddQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const authedUser = "tylermcginnis";

    const prepareQuestion = {
      optionOneText,
      optionTwoText,
      author: authedUser,
    };

    return saveQuestion(prepareQuestion).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(authedUser, question.id));
    });
  };
}
