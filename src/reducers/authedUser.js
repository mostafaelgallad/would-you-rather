import { LOGIN_AUTHED_USER, LOGOUT_AUTHED_USER } from "../actions/authedUser";

export default function authedUser(state = null, action) {
  console.log("njknlkn. reeduscr");
  switch (action.type) {
    case LOGIN_AUTHED_USER:
      return action.authedUser;
    case LOGOUT_AUTHED_USER:
      return null;
    default:
      return state;
  }
}
