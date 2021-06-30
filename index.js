import React from "react";
import Reactdom from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./src/pages/home";
import createConferenceDetails from './src/components/editer/createConferenceDetails';
import Allconference from './src/components/editer/conferenceDetails';
import editConference from './src/components/editer/ConferenceDetailsEdit';
import admonApprove from './src/components/editer/adminApprove';

function App(props) {
  return (
    <div>
      <Router>
        <section>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path = "/create-conference" component = {createConferenceDetails}/>
            <Route path = "/Allconference" component = {Allconference}/>
            <Route path = "/editConference/:id" component = {editConference}/>
            <Route path = "/admonApprove" component = {admonApprove}/>

          </Switch>
        </section>
      </Router>
    </div>
  );
}

Reactdom.render(<App />, document.getElementById("root"));
