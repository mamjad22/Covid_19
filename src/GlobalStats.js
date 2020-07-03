import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 50
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function GlobalStats({currentScreen}) {
    const classes = useStyles();

    const [globalData, setGlobalData] = useState({});
    //const [DataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        async function getData() {
        //    setDataLoading(true);
            const apiResponse = await fetch('https://api.thevirustracker.com/free-api?global=stats');
            // console.log(apiResponse);
            let data = await apiResponse.json();

            delete data.results[0].source;

            setGlobalData(data.results[0]);
            console.log(data.results[0]);

           // setDataLoading(false);

        }
        getData();
    }, []);



    return (
        <div className={classes.root}>
              
            <Grid container spacing={3}>
                {Object.keys(globalData).map( (key, ind) => {
                    return (
                        <Grid item xs={3} sm={4} key={ind}   >
                            <Paper
                                className={classes.paper}
                                elevation={3}>
                               <h3>{key.replace(/_/g, ' ').toUpperCase()}</h3>
                               <h3>{globalData[key]}</h3>
                            </Paper>
                        </Grid>
                    )
                }
                )
                }
                
            </Grid>
            

        </div>
    );
}