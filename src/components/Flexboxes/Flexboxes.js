import React from 'react';
import Box from '@material-ui/core/Box';

function createBoxes(bars) {
  return bars.map((value) => {
    return <Box
            p={1}>
            <p> {value} </p> 
          </Box>
})
}
export default function Flexboxes(props) {
  return (
    <Box
      display="flex"   
      flexWrap="wrap"
      justifyContent="space-evenly"
      alignItems="center"
      p={1}
      m={1}>
      { createBoxes(props.bars)}
    </Box>
  );
}
