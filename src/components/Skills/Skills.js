import "./Skills.css";
import React from 'react';
import { CircularProgressbarWithChildren   } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import PersonalInfo from "../../PersonalInfo";
import Flexboxes from "../Flexboxes/Flexboxes";
 
function createBars() {
    return Object.values(PersonalInfo.skills).map((value) =>{
            return  <CircularProgressbarWithChildren value={value.percentage}>
                        <p>{value.title} </p>
                        <p>{value.extra_text}</p>
                    </CircularProgressbarWithChildren>  
        }
    )
}
export const Skills = () => {
    const bars = createBars()
    console.log(bars)
   return(
        <Flexboxes bars />
   );

}