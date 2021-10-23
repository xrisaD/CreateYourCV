import "./Projects.css";
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkIcon from '@material-ui/icons/Link';

const addSources = (sources) => {  
  return (
    Object.entries(sources).map(([key, value]) =>{
          if (key === "github"){
            return(<a href={value}> <GitHubIcon /> </a>)
          }else{
            return(<a href={value}> <LinkIcon /> </a>)
          }
        }
      )
  );
};

const addItems = (projects) => {  
    return (
      Object.values(projects).map((value) =>{
            return(
            <Carousel.Item interval={1500}>
              <div className="carousel_background" ></div>
              <Carousel.Caption >
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