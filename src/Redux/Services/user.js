import Axios from "axios";
//Import Library Yup để Validate
import * as yup from "yup";

class userService {
  signUp(data) {
    return Axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data, // Vì là phương thức POST nên sẽ có thêm dòng data, để đưa dữ liệu lên server
    });
  }
  signIn(user) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user, // Vì là phương thức POST nên sẽ có thêm dòng data, để đưa dữ liệu lên server
    });
  }
}

export const signUpUserSChema = yup.object().shape({
  taiKhoan: yup.string().required("*Field is required!*"),
  matKhau: yup.string().required("*Field is required!*"),
  hoTen: yup.string().required("*Field is required!*"),
  email: yup
    .string()
    .required("*Field is required!*")
    .email("Email is invalid"),
  soDT: yup
    .string()
    .required("*Field is required!*")
    .matches(/^[0-9]+$/),
});

export default userService;
