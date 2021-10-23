import "./AboutMe.css";
import React from 'react';
import Paper from '@material-ui/core/Paper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typed from 'react-typed';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../../images/profile.jpg";
import Box from '@material-ui/core/Box';



const social_media_mapping = {
    "linkedin": <LinkedInIcon fontSize="large"/>,
    "github": <GitHubIcon fontSize="large"/>,
    "facebook": <FacebookIcon fontSize="large"/>,
    "instagram": <InstagramIcon fontSize="large"/>
};

const AddSocialMedia = (data) => {
    const arrayOfSocial = [];    
    for (const [key, value] of Object.entries(data)) {
        arrayOfSocial.push(
            <Box p={1} key={key}>
            <a href={value} key="value">
                { social_media_mapping[key] }
            </a>
            </Box>);
      }
    return arrayOfSocial;
}

const AddHeading = (props) => {
    var intro = props.intro
    var list = props.list
    return (
        <div className="first-wrapper">
            <div className="main-info">
                <div style={{ display: "flex" }}>
                    <ReactRoundedImage image={MyPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
                </div>
                <h3> { intro } </h3>
                <div>             
                    <Typed
                        className="typed-text"
                        strings={list}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </div>  
            </div>
        </div>
    )
}

const AddDetails = (props) => {
    return (
        <div className="description" key="description">   
            <div className="social-media" key="social_media">
                <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" p={1} m={1} >
                    { AddSocialMedia(props.social_media) }
                </Box>
            </div>
            <Box m={2} pt={3} pb={3}>
                <Paper elevation={3} className="paper">
                    {props.description}  
                </Paper>
            </Box>
        </div>
    )
}

const CheckDetails = (props) => {
    if (props.components.includes("details")){
        return (
            AddDetails(props.details)
        )
    }
}

const CheckHeading = (props) => {
    if (props.components.includes("heading")){
        return (
            AddHeading(props.heading)
        )
    }
}

export const AboutMe = (props) => {
    return (
        <div className="header-wrapper" key="about_me">
            { CheckHeading(props.data) }
            { CheckDetails(props.data) }
        </div>
    )
}