import React from "react";
import  {render} from "react-dom";
import { Home }  from "./components/Home.js";
import User from "./components/User";
import Root from "./components/Root";
import { BrowserRouter, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
            <Route path="/" component={Root} />
            <Route path ="/user/:id" component={User} />
            <Route path ="/home" component={Home} />
      </BrowserRouter> 
    )
  }
}

render(<App/>, document.getElementById("app"))