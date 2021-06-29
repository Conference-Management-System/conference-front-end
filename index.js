
import React from 'react';
import Reactdom from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './src/components/navbar.js';
import ResearchApproval from './src/components/researchApproval';
import ResearchReview from './src/components/researchReview';
import WorkshopReview from './src/components/workshopReview';
import ReviewerDashboard from './src/components/reviewerDashboard';
import WorkshopApproval from './src/components/workshopApproval';


function App (props) {
    return(
        <div>
            <Router>
                <Navbar/>
                <section>
                    <Switch>
                        <Route path="/research-paper" component={ResearchApproval} />
                        <Route path="/research-review/:id" component={ResearchReview} />
                        <Route path="/workshop-review/:id" component={WorkshopReview} />
                        <Route path="/workshop" component={WorkshopApproval} />
                        <Route path="/" component={ReviewerDashboard} exact />
                    </Switch>
                </section>
            </Router>

        </div>
    );
}

Reactdom.render(
    <App/>,
    document.getElementById('root')
)
