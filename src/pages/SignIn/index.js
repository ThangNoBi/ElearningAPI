import React, { Component } from "react";
import { Form, Formik, Field } from "formik";
import { connect } from "react-redux";
import { logIn } from "../../Redux/Actions/user";

class SignIn extends Component {
  render() {
    return (
      <Formik
        initialValues={{
          taiKhoan: "",
          matKhau: "",
        }}
        onSubmit={(values) => {
          // console.log(values);
          this.props.dispatch(logIn(values));
        }}
        render={(forMikProps) => (
          <Form className="w-50 m-auto">
            <h2 className="display-4 text-center">Đăng Nhập</h2>
            <div className="form-group">
              <label>Tài khoản</label>
              <Field
                type="text"
                className="form-control"
                name="taiKhoan"
                onChange={forMikProps.handleChange}
              />
            </div>
            <div className="form-group">
              <label>Mật khẩu</label>
              <Field
                type="password"
                className="form-control"
                name="matKhau"
                onChange={forMikProps.handleChange}
              />
            </div>
            <button className="btn btn-info" name="matKhau">
              Đăng nhập
            </button>
          </Form>
        )}
      />
    );
  }
}

export default connect()(SignIn);
