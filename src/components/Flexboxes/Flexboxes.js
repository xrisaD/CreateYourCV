import React from 'react';
import Box from '@material-ui/core/Box';

export default function Flexboxes(bars) {
  return (
    Object.values(bars).map((value) =>{
        <Box
          display="flex"
          flexWrap="wrap"
          p={1}
          m={1}
          bgcolor="background.paper"
          css={{ maxWidth: 300 }}
        >
            <p>sksk</p> 
        </Box>
    })
  );
}
