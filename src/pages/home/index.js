import React from 'react';
import { CssBaseline } from '@material-ui/core';

import Header from '../../components/Header/Header';

// styles
import useStyles from './styles';

function Home(props) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header headerText="My ToDO Application" />
        </div>
    );
}

export default Home;
