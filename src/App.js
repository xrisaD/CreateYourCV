import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import PersonalInfo from "./PersonalInfo";
import { NavBar } from "./components/Navbar/NavBar";
import { Header } from "./components/Header/Header";
import { Timelines } from "./components/Timelines/Timelines";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Projects } from "./components/Projects/Projects";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';


const mapping = {
  "about_me" : <Header />,
  "resume" : <Timelines />,
  "projects": <Projects />,
  "contact_me": "Contact Me",
  "skills": "Skills"
}
const addElements = () => {
  const arrayOfElements = [];
  var arrayLength = PersonalInfo.components.length;
  for (var i = 0; i < arrayLength; i++) {
    arrayOfElements.push(
      <Element name={PersonalInfo.components[i]} >
        { mapping[PersonalInfo.components[i]] }
      </Element>)
  }
  return arrayOfElements;
}

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        { addElements() }
    </BrowserRouter>

  )
}



export default App;
