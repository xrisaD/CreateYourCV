import React from 'react';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';


export const CustomTimeline = ({icon, title, childs}) => {
  return (
    <Timeline className="timeline">
      <TimelineItem className="first_item">
        <TimelineSeparator>
          <TimelineDot className="first_dot">{icon}</TimelineDot>
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
  return (
  <TimelineItem>
     <TimelineSeparator className="separator">
      <TimelineDot/>
      <TimelineConnector />
    </TimelineSeparator>
    <TimelineContent>{value.title}</TimelineContent>
  </TimelineItem>
  );
}
