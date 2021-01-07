import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourseDetailToThunk } from "../../Redux/Actions/courseThunk";

class CourseDetail extends Component {
  render() {
    const getDetail = this.props.courseDetail;
    console.log("Chi tiết KH", getDetail);
    return (
      <div className="m-3">
        <div className="card">
          <div className="card-header">
            <img
              src={getDetail.hinhAnh}
              className="card-img"
              style={{ width: 250 }}
            />
          </div>
          <div className="card-body">
            <h5>Tên Khóa Học : {getDetail.tenKhoaHoc} </h5>
            <h5>Mã Khóa Học : {getDetail.maKhoaHoc}</h5>
            <h5>Mã Nhóm : {getDetail.maNhom}</h5>
            <h5>Ngày Tạo : {getDetail.ngayTao}</h5>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    // courseSerDetail
    //   .fetchCourseDetail(this.props.match.params.IdCourse)
    //   .then((abc) => {
    //     //console.log(abc);
    //     this.props.dispatch(actionCreator(FETCH_COURSE_DETAIL, abc.data));
    //     //type: "FETCH_COURSE_DETAIL",
    //     //payload: abc.data,
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    this.props.dispatch(
      fetchCourseDetailToThunk(this.props.match.params.IdCourse)
    );
  }
}

const mapStateToProps = (state) => ({
  courseDetail: state.courses.courseDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    hinhAnh: "",
    nguoiTao: {
      taiKhoan: "",
    },
  },
});

export default connect(mapStateToProps, null)(CourseDetail);
