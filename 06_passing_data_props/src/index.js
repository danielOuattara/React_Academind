import React from 'react';
import  {render} from 'react-dom';

import { Header }  from "./components/Header.js";
import { Home }  from "./components/Home.js";

class App extends React.Component {
  render() {
    let user = {
      name: "John",
      hobbies: ['swiming', 'singing', 'flying']
    };

    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header/>
          </div>
        </div>
        
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home name={"Daniel"} age={37} user={user}>
              <p>This is a paragraph</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
};

render(<App/>, document.getElementById("app"))