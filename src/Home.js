
import React from 'react';
import { Box, Typography } from '@mui/material';

const Home = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="80vh"
    >
      <Box border={1} padding={2} borderRadius={2}>
        <Typography variant="h4">Welcome to the Home Page!</Typography>
      </Box>
    </Box>
  );
};

export default Home;
