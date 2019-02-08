import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './utilities/_main.scss';
import Login from './pages/Login';
import Home from './pages/Home';
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

