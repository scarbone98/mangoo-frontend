import React from 'react';
import './_top-bar.scss';
import {Link} from "react-router-dom";

export default () => {
    return (
        <header className="top-bar-container">
            <div className="top-bar-elements-container">
                <img className="icon-container" src={require("../../../assets/lawn-mower.svg")} alt="icon"/>
                <input className="search-bar" type="text"/>
            </div>
            <div className="top-bar-elements-container">
                <button className="top-bar-element">Settings</button>
                <button onClick={() => window.location.href = "/"} className="top-bar-element">Sign Up</button>
                <button onClick={() => window.location.href = "/"} className="top-bar-element">Login</button>
            </div>
        </header>
    )
}

