import "./AboutMe.css";
import React from 'react';
import Paper from '@material-ui/core/Paper';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Typed from 'react-typed';
import ReactRoundedImage from "react-rounded-image";
import MyPhoto from "../../images/generated_photos.jpg";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '20px',
      margin: '20px'
    }
}));


const social_media_mapping = {
    "linkedin": <LinkedInIcon fontSize="large"/>,
    "github": <GitHubIcon fontSize="large"/>,
    "facebook": <FacebookIcon fontSize="large"/>,
    "instagram": <InstagramIcon fontSize="large"/>
};

const AddSocialMedia = (data) => {
    const arrayOfSocial = [];    
    for (const [key, value] of Object.entries(data.social_media)) {
        arrayOfSocial.push(
            <Box p={1}>
            <a href={value}>
                { social_media_mapping[key] }
            </a>
            </Box>);
      }
    return arrayOfSocial;
}

const AddHeading = (props) => {
    var intro = props.data.intro
    var list = props.data.list
    return (
        <div className="first-wrapper">
            <div className="main-info">
                <div style={{ display: "flex" }}>
                    <ReactRoundedImage image={MyPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
                </div>
                <h3> { intro } </h3>               
                <Typed
                    className="typed-text"
                    strings={list}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
            </div>
        </div>
    )
}

const AddDetails = (props) => {
    const classes = useStyles();
    return (
        <div className="description">   
            <div className="social-media">
                <Box display="flex" flexDirection="row" justifyContent="center" flexWrap="wrap" p={1} m={1} >
                    { AddSocialMedia(props.data) }
                </Box>
            </div>
            <Box m={2} pt={3} pb={3}>
                <Paper elevation={3} className={classes.paper}>
                    {props.data.description}  
                </Paper>
            </Box>
        </div>
    )
    
}

export const AboutMe = (props) => {
    return (
        <div class="header-wrapper">
            { AddHeading(props) }
            { AddDetails(props) }
        </div>
    )
}