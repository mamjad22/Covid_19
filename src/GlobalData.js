import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(1),
      width: '100%',
      height: theme.spacing(16),
    },
  },
}));

const useStylesTypogrphy = makeStyles({
    root: {
      width: '100%',
      maxWidth: 500,
    },
  });

export default function GlobalData() {
  const classes = useStyles();
  const classeTypography = useStylesTypogrphy();

  return (
    <div className={classes.root} >
      <Paper elevation={3} >
        <div className={classeTypography.root} >       
            <Typography variant="h6" gutterBottom style={{color: 'red'}}>
                1000
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Count Global Data of Today
            </Typography>
                
         </div>       
      </Paper>
      <Paper elevation={3} >
        Active Cases
      </Paper>
      <Paper elevation={3} >
        Recover Data
      </Paper>
      <Paper elevation={3} >
        Fatalities Data
      </Paper>
      
    </div>
  );
}