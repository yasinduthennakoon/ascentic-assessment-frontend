import React from 'react';
import { CssBaseline, Grid, Card as MiniCard, CardActions, CardContent, Button, Typography } from '@material-ui/core';

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
                        <Grid item xs={3} />
                        <Grid item xs={6}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>My Todos</h4>
                                </CardHeader>
                                <CardBody>
                                    <Grid item spacing={3}>
                                        <MiniCard className={classes.cardRoot}>
                                            <CardContent>
                                                <Typography
                                                    className={classes.title}
                                                    color="textSecondary"
                                                    gutterBottom
                                                >
                                                    Word of the Day
                                                </Typography>
                                                <Typography variant="h5" component="h2">
                                                    test one
                                                </Typography>
                                                <Typography className={classes.pos} color="textSecondary">
                                                    adjective
                                                </Typography>
                                                <Typography variant="body2" component="p">
                                                    well meaning and kindly.
                                                    <br />
                                                    asdasdsadasd
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button size="small">Learn More</Button>
                                            </CardActions>
                                        </MiniCard>
                                    </Grid>
                                </CardBody>
                                <CardFooter />
                            </Card>
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                    <Grid item container xs={12} spacing={3}>
                        <Grid item xs={3} />
                        <Grid item xs={6}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>Add Todo</h4>
                                </CardHeader>
                                <CardBody>test</CardBody>
                                <CardFooter />
                            </Card>
                        </Grid>
                        <Grid item xs={3} />
                    </Grid>
                </Grid>
            </main>
        </div>
    );
}

export default Home;
