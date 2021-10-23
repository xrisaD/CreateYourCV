import "./Projects.css";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const addSources = (sources) => {  
  return (
    Object.entries(sources).map(([key, value]) =>{
          if (key === "github"){
            return(<a href={value} key={key}> <GitHubIcon /> </a>)
          }else{ 
            // this symbol will be returned for any other source
            return(<a href={value} key={key}> <LinkIcon /> </a>)
          }
        }
      )
  );
};

const addItems = (projects) => {  
    return (
      Object.entries(projects).map(([key, value]) =>{
            return(
            <Carousel.Item interval={1500} key={"item"+key}>
              <div className="carousel_background" ></div>
              <Carousel.Caption  key={"caption"+key}>
                <h3> {value.title} </h3>
                <div> { addSources(value.sources)} </div>
                <p> {value.description} </p>
              </Carousel.Caption>
            </Carousel.Item>
            )
          }
        )
    );
};

export const Projects = (props) => {
  return (
      <div className="outside">   
        <h2 className="subtitle"> Projects </h2>
        <Carousel>
            { addItems(props.data) }
        </Carousel>
      </div>
  );
}