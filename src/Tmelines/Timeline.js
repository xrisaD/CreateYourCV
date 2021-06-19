import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import WorkIcon from '@material-ui/icons/Work';

export const OutlinedTimeline = (title, child) => {
  return (
    <Timeline className="timeline">
      <TimelineItem className="first_item">
        <TimelineSeparator>
          <TimelineDot className="first_dot"><WorkIcon /></TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent variant="v6" className="timeline_header">
          <Typography>{title}</Typography>
        </TimelineContent>
      </TimelineItem>

      {child}
      <TimelineItem>
        <CustomTimelineSeparator />
        <TimelineContent>Code</TimelineContent>
      </TimelineItem>
    
    </Timeline>
  );
}

export const CustomTimelineSeparator = ({title}) => {
  return(
    <TimelineSeparator className="separator">
    <TimelineDot color="primary" />
    <TimelineConnector />
  </TimelineSeparator>
  );
}