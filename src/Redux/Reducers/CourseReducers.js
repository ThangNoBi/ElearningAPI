import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "../Actions/type";

let initialState = {
  coursesList: [],
  courseDetail: null,
};

const CourseReducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES: {
      state.coursesList = action.payload;
      return { ...state };
    }
    case FETCH_COURSE_DETAIL: {
      state.courseDetail = action.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default CourseReducers;
