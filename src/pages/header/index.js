import React, { Component } from "react";
import { Link, NavLink } from "react-router-dom";
import loGo from "../../assets/images/logo.png";
import colatset from "./style.module.css";
import { connect } from "react-redux";
import { actionCreator } from "../../Redux/Actions";

class Header extends Component {
  getInfoFromLocal = () => {
    const getInfoParse = localStorage.getItem("Account");
    if (getInfoParse) {
      localStorage.removeItem("Account");
      this.props.dispatch(actionCreator("LogOutUser", null));
    }
  };

  render() {
    // console.log(this.props.getInfo);
    return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-warning bg-warning mt-0">
          <a className="navbar-brand" href="#">
            <img src={loGo} className={colatset.logoc} />
          </a>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item">
                {/* <Link to="/" className="nav-link">
              Home
            </Link> */}
                {/* Nav Link dùng để hiển thị component mà mình đang đứng, sẽ hiện màu ở nút nhấp vào đó */}
                <NavLink to="/" activeStyle={{ color: "red" }} exact>
                  Trang chủ
                </NavLink>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              {/* <Link to="/signup">
            <button
              className="btn btn-outline-success m-2 my-sm-0"
              type="submit"
            >
              Sign up
            </button>
          </Link> */}
              {this.props.getInfo ? (
                <>
                  <span className="mr-3">Hi, {this.props.getInfo.hoTen}</span>
                  <button
                    onClick={() =>
                      //  console.log("cba")
                      this.getInfoFromLocal()
                    }
                    type="button"
                    className="btn btn-success"
                  >
                    Đăng xuất
                  </button>
                </>
              ) : (
                <form>
                  <NavLink to="/signup">
                    <button
                      className="btn btn-danger m-2 my-sm-0"
                      type="submit"
                    >
                      Đăng ký
                    </button>
                  </NavLink>
                  <NavLink to="/signin">
                    <button
                      className="btn btn-info m-2 my-sm-0"
                      type="submit"
                    >
                      Đăng nhập
                    </button>
                  </NavLink>
                </form>
              )}
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  getInfo: state.users.userStore,
});

export default connect(mapStateToProps)(Header);
