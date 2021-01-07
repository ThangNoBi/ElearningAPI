import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CoursesItem extends Component {
  render() {
    let CoursesFromProps = this.props.coursesProps;
    return (
      <div className="card">
        <div className="card-header">
          <img
            src={CoursesFromProps.hinhAnh}
            style={{ width: "100%", height: 150 }}
          />
        </div>
        <div className="card-body">
          <p className="card-text font-weight-bolder">
            Tên Khóa Học : {CoursesFromProps.tenKhoaHoc}
          </p>
          <p className="card-text">Ngày Tạo : {CoursesFromProps.ngayTao}</p>
          <p className="card-text">
            Người Tạo : {CoursesFromProps.nguoiTao.hoTen}
          </p>
          <p className="card-text">
            Danh Mục : {CoursesFromProps.danhMucKhoaHoc.tenDanhMucKhoaHoc}
          </p>
        </div>
        <Link
          to={`/detail/${CoursesFromProps.maKhoaHoc}`}
          className="btn btn-info"
        >
          Xem chi tiết
        </Link>
      </div>
    );
  }
}
