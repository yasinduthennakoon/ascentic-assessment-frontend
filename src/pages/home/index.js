/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import {
    CssBaseline,
    Grid,
    Card as MiniCard,
    CardActions,
    CardContent,
    Button,
    Typography,
    TextField,
} from '@material-ui/core';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

// redux store
import { getActiveTodo, createTodo } from '../../store/todo/action';

// styles
import useStyles from './styles';

function Home(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { todo } = props;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        dispatch(getActiveTodo());
    }, []);

    const onClickAddTodo = () => {
        const data = {
            title: title,
            description: description,
            activeStatus: true,
        };
        dispatch(createTodo(data));
    };

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
                                    {todo.activeTodo.map((item) => {
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
                                                    <Button size="small">Edit</Button>
                                                    <Button size="small">Remove</Button>
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
                    <Grid item container xs={12} spacing={3}>
                        <Grid item xs={3} />
                        <Grid item xs={6}>
                            <Card>
                                <CardHeader color="primary">
                                    <h4 className={classes.cardTitleWhite}>Add Todo</h4>
                                </CardHeader>
                                <CardBody>
                                    <Grid item container xs={12} spacing={3}>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="title"
                                                InputProps={{
                                                    classes: {
                                                        input: classes.textField,
                                                    },
                                                }}
                                                value={title}
                                                onChange={(e) => setTitle(e.target.value)}
                                                margin="normal"
                                                placeholder="Title"
                                                variant="outlined"
                                                type="text"
                                                fullWidth
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <TextField
                                                id="title"
                                                InputProps={{
                                                    classes: {
                                                        input: classes.textField,
                                                    },
                                                }}
                                                value={description}
                                                onChange={(e) => setDescription(e.target.value)}
                                                margin="normal"
                                                placeholder="Description"
                                                variant="outlined"
                                                type="text"
                                                multiline
                                                rows={6}
                                                fullWidth
                                            />
                                        </Grid>
                                    </Grid>
                                </CardBody>
                                <CardFooter>
                                    <Button
                                        onClick={() => onClickAddTodo()}
                                        variant="contained"
                                        color="primary"
                                        size="large"
                                    >
                                        Add Todo
                                    </Button>
                                </CardFooter>
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

export default connect(mapStateToProps)(withRouter(Home));
