import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './utilities/_main.scss';
import Login from './Pages/Login';
import Home from './Pages/Home';
import TopBar from './components/general/top-bar/TopBar';
export default () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={Login}/>
                <div>
                    <TopBar/>
                    <Route path="/home" component={Home}/>
                </div>
            </Switch>
        </Router>
    )
}

