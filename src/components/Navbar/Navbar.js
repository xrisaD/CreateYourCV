import "./Navbar.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PersonalInfo from "../../PersonalInfo";
import logo from '../../logo_dark.png';
import { NavLink } from "react-router-dom";

const mapping = {
    "about_me" : "About Me",
    "resume" : "Resume",
    "projects": "Projects",
    "contact_me": "Contact Me",
    "skills": "Skills"
}

const addLis = () =>  {
    const arrayOfLis = [];
    var arrayLength = PersonalInfo.components.length;
    for (var i = 0; i < arrayLength; i++) {
        arrayOfLis.push(
        <li className="nav-item">
            <NavLink
                exact
                className="nav-link"
                activeClassName="is-active"
                to={"/"+ mapping[PersonalInfo.components[i]] } 
                >
                { mapping[PersonalInfo.components[i]] }
            </NavLink>
        </li>);
    }
    return arrayOfLis;
}



export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
            <img src={logo} alt=""/>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">  
                        <NavLink
                            exact
                            className="nav-link"
                            activeClassName="is-active"
                            to="/"
                            >
                            About
                        </NavLink>
                     </li>
                    {addLis()}
                </ul>
            </div>
        </nav>
    );
}
