import React from 'react';
import Box from '@material-ui/core/Box';

export default function Flexboxes(boxes) {
  return (
    <div style={{ width: '100%' }}>
      <Box
        display="flex"
        flexWrap="wrap"
        p={1}
        m={1}
        bgcolor="background.paper"
        css={{ maxWidth: 300 }}
      >
          { boxes }
      </Box>
    </div>
  );
}

const createBox = () => {
    <Box p={1} bgcolor="grey.300">
          Item 1
        </Box>
}