import React from 'react';
import  {render} from 'react-dom';

import { Header } from "./components/Header";
import { Home } from "./components/Home";

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={"Home"}/>
          </div>
        </div>
        
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Daniel"} initialAge={37}/>
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById("app"))