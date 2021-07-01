import { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import SearchBar from '../../components/Search-bar'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));


const Homepage = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid container spacing={4}>
                

            </Grid>
        </div>
    )
}

export default Homepage;