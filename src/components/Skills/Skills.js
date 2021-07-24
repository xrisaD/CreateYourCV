import "./Skills.css";
import React from 'react';
import { CircularProgressbarWithChildren   } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PersonalInfo from "../../PersonalInfo";
import Flexboxes from "../Flexboxes/Flexboxes";
 
function createBars(skills) {
    var progressBars = {}
    Object.values(skills).map((value) =>{
            progressBars[value.title] = 
            <CircularProgressbarWithChildren value={value.percentage}>
                <p>{value.title} </p>
                <p>{value.extra_text}</p>
            </CircularProgressbarWithChildren>  
        }
    )
    return progressBars
}
export const Skills = (props) => {
    const bars = createBars(props.data)
   return(
        <Flexboxes bars />
   );

}