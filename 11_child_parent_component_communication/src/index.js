import React from 'react';
import {render} from 'react-dom';
import {Header} from "./components/Header.js";
import {Home} from "./components/Home.js";

class App extends React.Component {
  onGreet() {
    alert("Hello !")
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink="home"/>
          </div>
        </div>
        
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Daniel"} initialAge={37} greet={this.onGreet} />
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById("app"))