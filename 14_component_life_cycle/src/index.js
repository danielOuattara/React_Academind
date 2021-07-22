import React from 'react';
import  {render} from 'react-dom';
import  { Header }  from "./components/Header.js";
import { Home }  from "./components/Home.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = { homeLink: "Home" }
  }

  onGreet() {
    alert("Hello !")
  }

  onChangeLinkName(newName) {
    this.setState({ homeLink: newName })
  }


  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Header homeLink={ this.state.homeLink }/>
          </div>
        </div>
        
        <div className="row">
          <div className="col-xs-10 col-xs-offset-1">
            <Home 
              name={"Daniel"} 
              initialAge={37} 
              greet={ this.onGreet  } 
              onChangeLink={this.onChangeLinkName.bind(this)}
              initialLinkName= { this.state.homeLink} />
          </div>
        </div>
      </div>
    )
  }
}

render(<App/>, document.getElementById("app"))