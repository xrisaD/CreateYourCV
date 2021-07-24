import "./Projects.css";
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import MyImage from "../../images/tree.jpg";



const addItems = (projects) => {  
    return (
      Object.values(projects).map((value) =>{
            return(
            <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src={MyImage}
                alt= {value.title}
              />
              <Carousel.Caption >
                <h3> {value.title} </h3>
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
      <div>   
      <Carousel className="carousel">
          { addItems(props.data) }
      </Carousel></div>
  );
}