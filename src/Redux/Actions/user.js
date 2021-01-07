import { actionCreator } from ".";
import { uSerV } from "../Services";
import { FETCH_USER } from "./type";

export const logIn = (us) => {
  return (disp) => {
    uSerV
      .signIn(us)
      .then((res) => {
        // console.log(res);
        disp(actionCreator(FETCH_USER, res.data));
        localStorage.setItem("Account", JSON.stringify(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
