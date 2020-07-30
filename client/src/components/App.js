import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Login from "./Login";
import Register from "./Register";
import { useSelector } from "react-redux";

function App() {
  const name = useSelector(state=>state.user.user)
  console.log(name);
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
      </Switch>
    </div>
  );
}

export default App;
