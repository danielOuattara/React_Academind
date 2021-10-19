import React from "react";
import {render} from "react-dom";
import { Home }  from "./components/Home.js";
import User from "./components/User";
import Root from "./components/Root";
import { BrowserRouter, Switch, Route, Link} from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      // <Root>
      //   <Home/>
      // </Root>
      
      // 1 : 

      // <BrowserRouter> {/* // NOT WORKING */}
      //       <Route path ={"user"} component={User} />
      //       <Route path ={"home"} component={Home} />
      // </BrowserRouter> 


      // <BrowserRouter> {/* // WORKING MANUALY */}
      //       <Route path ="/user" component={User} />
      //       <Route path ="/home" component={Home} />
      // </BrowserRouter> 


      // <BrowserRouter> {/* //NOT WORKING*/}
      //       <Route path="/" component={Root}>
      //           <Route path ="/user" component={User} />
      //           <Route path ="/home" component={Home} />
      //       </Route>
      // </BrowserRouter> 

      <BrowserRouter> {/* // WORKING MANUALY*/}
            <Route path="/" component={Root} />
            <Route path ="/user" component={User} />
            <Route path ="/home" component={Home} />
      </BrowserRouter> 
 


      //---------------------------------------------------

      // <BrowserRouter>  // NOT WORKING
      //   <Switch>
      //         <Route path ={"user"} component={User} />
      //         <Route path ={"home"} component={Home} />
      //   </Switch>
      // </BrowserRouter> 

      
      // <BrowserRouter>  {/* WORKING: OK */}
      //       <Route path ="/">
      //         <Root />
      //       </Route>
      //       <Route path ="/home">
      //         <Home />
      //       </Route>
      //       <Route path ="/user">
      //         <User />
      //       </Route>
      // </BrowserRouter> 



      // <BrowserRouter>  // NOT WORKING Because of <Swith> tag
      //     <Switch>
      //       <Route path ="/">
      //         <Root />
      //       </Route>
      //       <Route path ="/home">
      //         <Home />
      //       </Route>
      //       <Route path ="/user">
      //         <User />
      //       </Route>
      //     </Switch>
      // </BrowserRouter> 
    )
  }
}

render(<App/>, document.getElementById("app"))