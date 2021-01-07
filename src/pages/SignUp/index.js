import React, { Component } from "react";

//Import Formik để xử lý Form
import { Formik, Form, Field, ErrorMessage } from "formik";
import { uSerV } from "../../Redux/Services";
import { signUpUserSChema } from "../../Redux/Services/user";

export default class SignUp extends Component {
  _handleSubmit = (values) => {
    console.log(values);
    uSerV
      .signUp(values)
      .then((abc) => {
        console.log(abc.data);
        alert("Bạn đã đăng ký thành công");
      })
      .catch((err) => {
        console.log("Đăng ký không thành công", err);
        alert("Mời bạn nhập thông tin chính xác");
      });
  };

  handleRequire = (message) => {
    return <div className="alert alert-primary">{message}</div>;
  };

  render() {
    return (
      <div className="w-50 m-auto">
        <h2 className="display-4 text-center">Đăng Ký</h2>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            email: "",
            maNhom: "",
          }}
          //Hàm validate Formik cung cấp, truyền biến ở trên vào để thực thi validate
          validationSchema={signUpUserSChema}
          onSubmit={this._handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài khoản </label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="taiKhoan">
                  {/* {(message) => (
                    <div className="alert alert-primary">{message}</div>
                  )} */}
                  {this.handleRequire}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mật khẩu </label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="matKhau">{this.handleRequire}</ErrorMessage>
              </div>
              <div className="form-group">
                <label>Họ tên </label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="hoTen">{this.handleRequire}</ErrorMessage>
              </div>
              <div className="form-group">
                <label>Email </label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="email">{this.handleRequire}</ErrorMessage>
              </div>
              <div className="form-group">
                <label>Số điện thoại </label>
                <Field
                  type="text"
                  className="form-control"
                  name="soDT"
                  onChange={formikProps.handleChange}
                />
                <ErrorMessage name="soDT">{this.handleRequire}</ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mã nhóm </label>
                <Field
                  component="select"
                  className="form-control"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                <ErrorMessage name="maNhom" />
              </div>
              <div className="text-center">
                <button className="btn btn-warning">Lưu</button>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
}
