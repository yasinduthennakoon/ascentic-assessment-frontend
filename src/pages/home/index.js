import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from '../../components/Header/Header';

// styles
import useStyles from './styles';

function Home(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header headerText="My ToDO Application" />
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <Grid container spacing={3}>
                    <Grid item container xs={12} spacing={3}>
                        part 01
                    </Grid>
                    <Grid item container xs={12} spacing={3}>
                        part 02
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

export default Home;
