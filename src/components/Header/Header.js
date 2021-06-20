import "./Header.css";
import React from 'react';
import Typed from 'react-typed';
import ReactRoundedImage from "react-rounded-image";
import PersonalInfo from "../../PersonalInfo";
import MyPhoto from "../../generated_photos.jpg";
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

const useStyles = makeStyles((theme) => ({
    paper: {
      padding: '6px 16px',
    }
  }));

const social_media_mapping = {
    "linkedin": <LinkedInIcon />,
    "github": <GitHubIcon />
};

const AddSocialMedia = () => {
    const arrayOfSocial = [];    
    for (const [key, value] of Object.entries(PersonalInfo.social_media)) {
        arrayOfSocial.push(
            <a href={value}>
                { social_media_mapping[key] }
            </a>);
      }
    return arrayOfSocial;
}

export const Header = () => {
    const classes = useStyles();
    return (
        <div class="header-wrapper">
            <div className="first-wrapper">
                <div className="main-info">
                    <div style={{ display: "flex" }}>
                        <ReactRoundedImage image={MyPhoto} roundedSize="0" imageWidth="200" imageHeight="200" />
                    </div>
                    <h3> {PersonalInfo.intro} </h3>               
                    <Typed
                        className="typed-text"
                        strings={PersonalInfo.list}
                        typeSpeed={40}
                        backSpeed={60}
                        loop
                    />
                </div>
            </div>
            <div className="description">
                <div className="social-media">
                    { AddSocialMedia() }
                </div>
                <Paper elevation={3} className={classes.paper}>
                    {PersonalInfo.description}  
                </Paper>
            </div>
        </div>
    )
}

