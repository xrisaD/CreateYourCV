import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  }
}));

export const CustomTimeline = ({icon, title, childs}) => {
  return (
    <Timeline align="alternate" className="timeline">
      <TimelineItem className="first_item">
        <TimelineSeparator>
          <TimelineDot variant="outlined" className="first_dot">{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent className="timeline_header">
          {title}
        </TimelineContent>
      </TimelineItem>
      {childs}
    </Timeline>
  );
}

export const CustomTimelineChild = ({value}) => {
  const classes = useStyles();
  return (
  <TimelineItem>
     <TimelineSeparator className="separator">
      <TimelineDot/>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>
      <Paper elevation={3} className={classes.paper}>
        <Typography variant="h6" component="h1"> {value.title}</Typography>
        <Typography>{value.date}</Typography>
        <Typography>{value.description}</Typography>
      </Paper>
    </TimelineContent>
  </TimelineItem>
  );
}
