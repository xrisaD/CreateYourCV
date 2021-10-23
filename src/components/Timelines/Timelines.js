import "./Timelines.css";
import React from 'react';
import { CustomTimeline} from "./Timeline";
import { CustomTimelineChild} from "./Timeline";
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';

export const Timelines = (props) => {
    return (
        <React.Fragment>
          <h2 className="subtitle"> Timeline </h2>
          <div className="timelines">
            <CustomTimeline className="timeline" icon={<WorkIcon />} title={"Work Experience"}  childs={childs(props.data.work_experience)}/>
            <CustomTimeline className="timeline" icon={<SchoolIcon />} title={"Education"} childs={childs(props.data.education)}/>
          </div>
        </React.Fragment>
    );
  }

  const childs = (data) => {
    return (
      Object.values(data).reverse().map((value) =>{
        return <CustomTimelineChild value={value} key={value.title} />
      })
    );
  }
