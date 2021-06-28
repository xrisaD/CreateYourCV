import "./Projects.css";
import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import PersonalInfo from "../../PersonalInfo";
import MyPhoto from "../../images/tree.jpg";

const addItems = () => {  
    return (
        Object.values(PersonalInfo.projects).map((value) =>{
            return  <Carousel.Item interval={1500}>
              <img
                className="d-block w-100"
                src={require("../../images/tree.jpg")}
                alt= {value.title}
              />

              <Carousel.Caption >
                <h3> {value.title} </h3>
                <p> {value.description} </p>
                <p> {value.description} </p>
              </Carousel.Caption>
            </Carousel.Item>
          }
        )

    );
};

export const Projects = () => {
    return (
        <div>   
        <Carousel className="carousel">
        
            {console.log(PersonalInfo.projects)}
            { addItems() }
        </Carousel></div>
    );
}