import React, { Component } from "react";
import CoursesItem from "../../Components/CoursesItem";
import { connect } from "react-redux";
import { fetchCourseToThunk } from "../../Redux/Actions/courseThunk";

class Home extends Component {
  renderCourse = () => {
    // console.log(this.props.courseGet);
    return this.props.courseGet.map((dsKH, index) => {
      return (
        <div className="col-4 mb-3" key={index}>
          <CoursesItem coursesProps={dsKH} />
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h2 className="display-4 text-center">Danh Sách Khóa Học</h2>
        <div className="container">
          <div className="row">{this.renderCourse()}</div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.props.dispatch(fetchCourseToThunk());
  }
}

const mapStateToProps = (state) => ({
  courseGet: state.courses.coursesList,
});

export default connect(mapStateToProps, null)(Home);
