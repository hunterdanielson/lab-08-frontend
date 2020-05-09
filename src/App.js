import React, { Component } from 'react'
import {
    BrowserRouter as Router, 
    Route, 
    Switch,
} from "react-router-dom";
import HomePage from './HomePage.js';
import AboutMePage from './AboutMePage.js';
import FormPage from './FormPage.js';
import DetailPage from './DetailPage.js';

export default class App extends Component {
    render() {
        return (
            <div>
                <Router>
                    <Switch>
                        <Route 
                            path="/" 
                            exact
                            render={(routerProps) => <HomePage {...routerProps} />} 
                        />
                         <Route 
                            path="/weapons/:id" 
                            exact
                            render={(routerProps) => <DetailPage {...routerProps} />} 
                        />
                         <Route 
                            path="/about" 
                            exact
                            render={(routerProps) => <AboutMePage {...routerProps} />} 
                        />
                          <Route 
                            path="/form" 
                            exact
                            render={(routerProps) => <FormPage {...routerProps} />} 
                        />
                      
                    </Switch>
                </Router>
            </div>
        )
    }
}