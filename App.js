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
import ResearchApproval from "./src/components/reviewer/researchApproval";
import ResearchReview from "./src/components/reviewer/researchReview";
import WorkshopReview from "./src/components/reviewer/workshopReview";
import ReviewerDashboard from "./src/components/reviewer/reviewerDashboard";
import WorkshopApproval from "./src/components/reviewer/workshopApproval";
import createConferenceDetails from "./src/components/editer/createConferenceDetails";
import Allconference from "./src/components/editer/conferenceDetails";
import editConference from "./src/components/editer/ConferenceDetailsEdit";

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
            <Route path="/research-paper" component={ResearchApproval} />
            <Route path="/research-review/:id" component={ResearchReview} />
            <Route path="/workshop-review/:id" component={WorkshopReview} />
            <Route path="/workshop-list" component={WorkshopApproval} />
            <Route path="/reviewer" component={ReviewerDashboard} exact />
            <Route
              path="/create-conference"
              component={createConferenceDetails}
            />
            <Route path="/Allconference" component={Allconference} />
            <Route path="/editConference/:id" component={editConference} />

            <Route path="/login" component={Login} />
          </Switch>
        </section>
      </Router>
    </div>
  );
}

export default App;
