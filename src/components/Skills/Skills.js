import "./Skills.css";
import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import Flexboxes from "../Flexboxes/Flexboxes";
import { red } from "@material-ui/core/colors";
 
function createBars(skills) {
    var bars = [];
    Object.values(skills).map(( value) =>{     
            bars.push(<CircularProgressbarWithChildren value={value.percentage} 
                styles={buildStyles({pathColor: value.color})}>
                <p>{value.title} </p>
                <p>{value.extra_text}</p>
            </CircularProgressbarWithChildren>);  
        }
    )
    return bars;
}
export const Skills = (props) => {
    const bars = createBars(props.data)
   return(
    <div>
        <h2 className="subtitle"> Skills </h2>
        <Flexboxes bars = {bars} />
    </div>
   );

}