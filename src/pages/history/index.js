/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { CssBaseline, Grid, Card as MiniCard, CardActions, CardContent, Typography } from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

// redux store
import { getAllTodo } from '../../store/todo/action';

// styles
import useStyles from './styles';

function History(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { todo } = props;

    useEffect(() => {
        dispatch(getAllTodo());
    }, []);

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Header history={props.history} headerText="My ToDO Application" />
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
                                    {todo.allTodo.map((item) => {
                                        return (
                                            <MiniCard key={item._id} className={classes.cardRoot}>
                                                <CardContent>
                                                    <Typography variant="h5" component="h2">
                                                        {item.title}
                                                    </Typography>
                                                    <Typography variant="body2" component="p">
                                                        {item.description}
                                                    </Typography>
                                                </CardContent>
                                                <CardActions>
                                                    <Typography className={classes.pos} color="textSecondary">
                                                        {item.activeStatus ? 'Active' : 'Completed'}
                                                    </Typography>
                                                </CardActions>
                                            </MiniCard>
                                        );
                                    })}
                                </CardBody>
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

const mapStateToProps = (state) => {
    const { todo } = state;

    return { todo };
};

export default connect(mapStateToProps)(withRouter(History));
