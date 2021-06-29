import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./src/pages/home";
import Register from "./src/pages/userRegister";

function App(props) {
  return (
    <div>
      <Router>
        <section>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/register" component={Register} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

Reactdom.render(<App />, document.getElementById("root"));
