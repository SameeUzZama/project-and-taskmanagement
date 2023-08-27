import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { Project } from './components/Projects/Project';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'MaisonNeue-MediumItalic',
    borderRadius: '50px',
    boxShadow: 'inset 0px -23px 25px 0px rgba(0, 0, 0, 0.17), inset 0px -36px 30px 0px rgba(0, 0, 0, 0.15), inset 0px -79px 40px 0px rgba(0, 0, 0, 0.1), 0px 2px 1px rgba(0, 0, 0, 0.09), 0px 4px 2px rgba(0, 0, 0, 0.09), 0px 8px 4px rgba(0, 0, 0, 0.09), 0px 16px 8px rgba(0, 0, 0, 0.09), 0px 32px 16px rgba(0, 0, 0, 0.09)',
    marginBottom: '40px',
    padding: '30px'
  },
}));


const App = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Grid container spacing={1} className={classes.root}>
        <Box className={classes.title}>
        <Typography fontSize='3rem'>Time Tracking App</Typography>
        </Box>
        <Project />
      </Grid>
    </React.Fragment>
  )
}

export default App
