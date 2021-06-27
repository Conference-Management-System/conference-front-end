
import React from 'react';
import Reactdom from 'react-dom';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App (props) {
    return(
        <div>
            <Router>
               
                <section>
                    <Switch>
                        
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
