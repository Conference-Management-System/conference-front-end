import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./src/pages/home";
import Register from "./src/pages/userRegister";
import SubmitResearch from "./src/pages/submitResearch";
import SubmitWorkshop from "./src/pages/submitWorkshop";
import Login from "./src/pages/userLogin";
import Research from "./src/pages/research";
import Workshop from "./src/pages/workshop";
import { useContext } from "react";
import { Context } from "./src/context/context";

function App() {
  const { user } = useContext(Context);
  return (
    <div>
      <Router>
        <section>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/register" component={Register} />
            <Route path="/create-research" component={SubmitResearch} />
            <Route path="/create-workshop" component={SubmitWorkshop} />
            {/* <Route exact path="/login">
              {user ? <Home /> : <Login />}
            </Route> */}
            <Route path="/workshop" component={Workshop} />
            <Route path="/research" component={Research} />

            <Route path="/login" component={Login} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;