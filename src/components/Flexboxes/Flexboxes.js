import React from 'react';
import Box from '@material-ui/core/Box';

function createBoxes(bars) {
  return Object.entries(bars).map(([key, value]) => {
    return <Box key = {key}
            p={1}>
             {value}  
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
