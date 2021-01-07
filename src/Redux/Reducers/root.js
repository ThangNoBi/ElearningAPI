import CourseReducers from "./CourseReducers";
import userReducer from "./UserReducer";
const { combineReducers } = require("redux");

const RootReducer = combineReducers({
  courses: CourseReducers,
  users: userReducer,
});

export default RootReducer;
