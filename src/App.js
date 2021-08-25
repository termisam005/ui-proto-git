import React from "react";
import { BrowserRouter, BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";
import Login from "./pages/Login";
import FindId from "./pages/FindId";
import FindPw from "./pages/FindPw";
import Signin from "./pages/Signin";
import Main from "./pages/Main";
import Foryou from "./pages/Foryou";
import Collabo from "./pages/Collabo";
import Pitching from "./pages/Pitching";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/*로그인*/}
        <Route path={['/', '/login']} exact component={Login} />
        {/*아이디/비번 찾기*/}
        <Route path="/find_id" exact component={FindId} />
        <Route path="/find_pw" exact component={FindPw} />
        {/*회원가입*/}
        <Route path="/signin" exact component={Signin} />
        {/*메인화면*/}
        <Route path="/main" exact component={Main} />
        <Route path="/foryou" exact component={Foryou} />
        <Route path="/collabo" exact component={Collabo} />
        <Route path="/pitching" exact component={Pitching} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
