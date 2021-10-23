import "./data.css";
import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/Navbar/Navbar";
import { AboutMe } from "./components/AboutMe/AboutMe"
import { Timelines } from "./components/Timelines/Timelines";
import { BrowserRouter } from 'react-router-dom';
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Languages } from "./components/Languages/Languages";
import { ContactMeAnonymously } from "./components/ContactMeAnonymously/ContactMeAnonymously";
import { Element } from 'react-scroll';
import data from './data.json';

const mapping = {
  "about_me": <AboutMe data = { data.about_me } />,
  "timeline" : <Timelines data = { data.timeline } />,
  "projects": <Projects data = { data.projects }/>,
  "contact_me": <ContactMeAnonymously data = {data.contact_me} />,
  "skills": <Skills data = {data.skills} />,
  "languages": <Languages data = {data.languages} />
}

const addElements = () => {
  const arrayOfElements = [];
  var arrayLength = data.components.length;
  for (var i = 0; i < arrayLength; i++) {
    arrayOfElements.push(
      <Element name={data.components[i]} key={data.components[i]} >
        { mapping[data.components[i]] }
      </Element>)
  }
  return arrayOfElements;
}

function App() {
  return (
    <BrowserRouter>
        <NavBar data = {data.components} key="navbar"/>
        { addElements() }
    </BrowserRouter>
  )
}

export default App;
