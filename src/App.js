import "./App.css";
import Home from "./pages/home";
import CourseDetail from "./pages/CourseDetail";
import SignUp from "./pages/SignUp";
import { connect } from "react-redux";

//Import Route đường dẫn
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./pages/header";
import SignIn from "./pages/SignIn";
import { Component } from "react";
import { actionCreator } from "./Redux/Actions";
import { FETCH_USER } from "./Redux/Actions/type";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact={true} component={Home} />
          <Route path="/detail/:IdCourse" component={CourseDetail} />
          <Route path="/signup" component={SignUp} />
          <Route path="/signin" component={SignIn} />
        </Switch>
      </BrowserRouter>
    );
  }

  getInfoFromLocal = () => {
    const getInfoParse = localStorage.getItem("Account");
    if (getInfoParse) {
      this.props.dispatch(actionCreator(FETCH_USER, JSON.parse(getInfoParse)));
    }
  };

  componentDidMount() {
    this.getInfoFromLocal();
  }
}

export default connect()(App);
