import React from "react";
import  {render} from "react-dom";
// import  { Root }  from "./components/Root.js";
import { Home }  from "./components/Home.js";
import User from "./components/User";
import {Router, Route, browserHistory} from "react-router";

class App extends React.Component {
  render() {
    return (
      // <Root>
      //   <Home></Home>
      // </Root>
      <Router history= {browserHistory}>
        <Route path={"user"} component={User}/>
        <Route path={"home"} component= {Home}/>
      </Router>


    )
  }
}

render(<App/>, document.getElementById("app"))