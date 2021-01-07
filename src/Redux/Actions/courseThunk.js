import { actionCreator } from ".";
import { courseSerDetail, courseSerV } from "../Services";
import { FETCH_COURSES, FETCH_COURSE_DETAIL } from "./type";

// Async action => vừa dispatch 1 action lên store, vừa tiến hành
// Call API, khi server trả kqua về thì nó sẽ tiếp tục đoạn đường đưa dữ liệu đó lên store
// (tránh trường hợp trước giờ làm là khi server chưa trả kq về khi ta click vào component
// khác thì nó sẽ không trả dữ liệu về component lúc nãy nữa, và tất nhiên trên store sẽ không có dữ liệu)
export const fetchCourseToThunk = () => {
  return (disp) => {
    courseSerV
      .fetchCourse()
      .then((abc) => {
        console.log(abc);
        disp(actionCreator(FETCH_COURSES, abc.data));
        //type:"FETCH_COURSES"
        //payload:actionCreator.data
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCourseDetailToThunk = (id) => {
  return (diss) => {
    courseSerDetail
      .fetchCourseDetail(id)
      .then((abc) => {
        //console.log(abc);
        diss(actionCreator(FETCH_COURSE_DETAIL, abc.data));
        //type: "FETCH_COURSE_DETAIL",
        //payload: abc.data,
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
