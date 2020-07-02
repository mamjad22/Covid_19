import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';
import {useEffect} from 'react';
import {useState} from 'react';

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

const [globalData , setGlobalData] = useState({});
const [DataLoading , setDataLoading] = useState(false);

useEffect( () => { 
        async function fetchGlobalData () {
          setDataLoading(true);
        const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
       // console.log(apiResponse);
        let dataFromAPI = await apiResponse.json();
          
        delete dataFromAPI.results[0].source;
        setGlobalData(dataFromAPI);
        console.log(dataFromAPI);

        setDataLoading(false);

    }
    fetchGlobalData();
},[]);


  return (
    <div className={classes.root} >
      <Paper elevation={3} >
        <div className={classeTypography.root} >       
            <Typography variant="h6" gutterBottom style={{color: 'black'}}>
            {globalData && globalData.results && globalData.results[0].total_cases}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
                Count Global Data of Today
            </Typography>
         </div>       
      </Paper>
      <Paper elevation={3} >
        <div className={classeTypography.root} >       
            <Typography variant="h6" gutterBottom style={{color: 'blue'}}>
            {globalData && globalData.results && globalData.results[0].total_active_cases}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Active Cases
            </Typography>
         </div>
        
      </Paper>
      <Paper elevation={3} >
        <div className={classeTypography.root} >       
            <Typography variant="h6" gutterBottom style={{color: 'Green'}}>
            {globalData && globalData.results && globalData.results[0].total_recovered}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Recover Cases
            </Typography>
         </div>
      </Paper>
      <Paper elevation={3} >
        <div className={classeTypography.root} >       
            <Typography variant="h6" gutterBottom style={{color: 'red'}}>
            {globalData && globalData.results && globalData.results[0].total_deaths}
            </Typography>
            <Typography variant="subtitle2" gutterBottom>
              Fatalities  Cases
            </Typography>
         </div>
        
      </Paper>
      
    </div>
  );
}