import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PersonalInfo from "./PersonalInfo"
import { NavBar } from "./components/NavBar/NavBar";
import { AboutMe } from "./components/AboutMe/AboutMe"
import { Timelines } from "./components/Timelines/Timelines";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import data from './data.json';

const mapping = {
  "about me": <AboutMe data = { data.about_me } />,
  "timeline" : <Timelines data = { data.timeline } />,
  "projects": <Projects data = { data.projects }/>,
  "contact me": <div></div>,
  "skills": <Skills data = {data.skills} />
}

const addElements = () => {
  console.log(data)
  const arrayOfElements = [];
  var arrayLength = data.components.length;
  for (var i = 0; i < arrayLength; i++) {
    arrayOfElements.push(
      <Element name={data.components[i]} >
        { mapping[data.components[i]] }
      </Element>)
  }
  return arrayOfElements;
}

function App() {
  return (
    <BrowserRouter>
        <NavBar data = {data.components}/>
        { addElements() }
    </BrowserRouter>
  )
}

export default App;
