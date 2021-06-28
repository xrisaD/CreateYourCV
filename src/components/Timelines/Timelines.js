import "./Timelines.css";
import React from 'react';
import PersonalInfo from "../../PersonalInfo";
import { CustomTimeline} from "./Timeline";
import { CustomTimelineChild} from "./Timeline";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

export const Timelines = () => {
    return (
        <React.Fragment>
          <div className="timelines">
            <CustomTimeline className="timeline" icon={<WorkIcon />} title={"Work Experience"}  childs={childs(PersonalInfo.work_experience)}/>
            <CustomTimeline className="timeline" icon={<SchoolIcon />} title={"Education"} childs={childs(PersonalInfo.education)}/>
          </div>
        </React.Fragment>
    );
  }

  const childs = (data) => {
    return (
      Object.values(data).reverse().map((value) =>{
        return <CustomTimelineChild value={value}/>
      })
    );
  }
