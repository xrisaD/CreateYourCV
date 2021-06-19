import "./App.css";
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Navbar } from "./components/Navbar";
import { Header } from "./components/Header";
import workExperienceData from "./workExperience";
import educationData from "./education";
import { CustomTimeline} from "./components/Tmelines/Timeline";
import { CustomTimelineChild} from "./components/Tmelines/Timeline";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Header />
      <CustomTimeline icon={<WorkIcon />} title={"Work Experience"} 
      childs={workExperienceChilds()}/>
    </React.Fragment>
  )
}

const workExperienceChilds = () => {
  return (
    Object.values(workExperienceData).map((value) =>{
      return <CustomTimelineChild value={value}/>
    })
  );
}

export default App;
