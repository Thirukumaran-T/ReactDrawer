
import React, { useState } from 'react';
import { Box, Button, Grid, Typography } from '@mui/material';

const Calculator = () => {
  const [display, setDisplay] = useState('0');

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setDisplay('0');
    } else if (value === '=') {
      try {
        setDisplay(eval(display).toString());
      } catch {
        setDisplay('Error');
      }
    } else {
      setDisplay(display === '0' ? value : display + value);
    }
  };

  const buttons = [
    ['AC', '+/-', '%', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="80vh"
    >
      <Box
        width="300px"
        bgcolor="#000000" 
        padding={2}
        borderRadius={2}
      >
        <Typography
          variant="h4"
          align="right"
          marginBottom={2}
          color="white" 
        >
          {display}
        </Typography>
        <Grid container spacing={1}>
          {buttons.flat().map((button) => {
            const isOperator = ['/', '*', '-', '+', '='].includes(button);
            const isSpecial = ['AC', '+/-', '%'].includes(button);

            return (
              <Grid item xs={button === '0' ? 6 : 3} key={button}>
                <Button
                  variant="contained"
                  fullWidth
                  onClick={() => handleButtonClick(button)}
                  sx={{ borderRadius: '90%' }}
                  style={{
                    height: 60,
                    fontSize: '1.5rem',
                    backgroundColor: isOperator
                      ? '#f09a36' 
                      : isSpecial
                      ? '#a5a5a5' 
                      : '#333333', 
                    color: isOperator || isSpecial ? 'black' : 'white',
                  }}
                >
                  {button}
                </Button>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default Calculator;
