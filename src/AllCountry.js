import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginTop: 50,
        padding: 10
        
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function AllCountry({currentScreen}) {
    const classes = useStyles();

    const [globalData, setGlobalData] = useState([{}]);
    //const [DataLoading, setDataLoading] = useState(false);

    useEffect(() => {
        async function getData() {
        //    setDataLoading(true);
            const apiResponse = await fetch('https://api.thevirustracker.com/free-api?countryTotals=ALL');
            // console.log(apiResponse);
            let data = await apiResponse.json();
            //console.log(data);
            setGlobalData(Object.values(Object.values(data.countryitems)[0]));
            console.log(Object.values(Object.values(data.countryitems)[0]));

           // setDataLoading(false);

        }
        getData();
    }, []);



    return (
        <div className={classes.root}>
           <table >
                <tr>
                    <th>Country Name</th>
                    <th>Total Cases</th>
                    <th>Active Cases</th>
                </tr>

                {globalData.map( (key, ind) => {
                    return (
                        <tr>
                             <td>{globalData[ind].title}</td>
                            <td>{globalData[ind].total_cases}</td>
                            <td>{globalData[ind].total_active_cases}</td>
                            
                        </tr>
                    )
                }
                )
                }
                
            </table>
         

        </div>
    );
}