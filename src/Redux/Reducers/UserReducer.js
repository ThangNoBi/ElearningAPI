import { FETCH_USER } from "../Actions/type";

let initialState = {
  userStore: null,
};

const UsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER:
      state.userStore = action.payload;
      return { ...state };
    case "LogOutUser":
      return { ...state, userStore: action.payload };
    default:
      return state;
  }
};

export default UsReducer;
