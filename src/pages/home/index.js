import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

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
                        <Grid item xs={12}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>My Todos</h4>
                                </CardHeader>
                                <CardBody>test</CardBody>
                                <CardFooter />
                            </Card>
                        </Grid>
                    </Grid>
                    <Grid item container xs={12} spacing={3}>
                        <Grid item xs={12}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>Add Todo</h4>
                                </CardHeader>
                                <CardBody>test</CardBody>
                                <CardFooter />
                            </Card>
                        </Grid>
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

export default Home;
