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
           <table>
                {globalData.map( (key, ind) => {
                    return (
                        <tr>
                            <td>
                                {globalData[key].title}
                            </td>
                        </tr>
                    )
                }
                )
                }
                
            </table>
         

        </div>
    );
}