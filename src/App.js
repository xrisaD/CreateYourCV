import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from "./components/Navbar/Navbar";
import { Header } from "./components/Header/Header";
import { Timelines } from "./components/Timelines/Timelines";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Header} />

          <Route path="/resume" component={Timelines} />
        </Switch>
    </BrowserRouter>

  )
}


export default App;
