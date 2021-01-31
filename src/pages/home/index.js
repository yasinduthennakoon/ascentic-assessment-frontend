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
import { getActiveTodo, createTodo, deleteTodo, completeTodo } from '../../store/todo/action';

// sub component
import EditModal from './editModal';

// styles
import useStyles from './styles';

function Home(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { todo } = props;

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [{ editModalOpen, editTitle, editDescription, todoId }, setEditModalDetails] = useState({
        editModalOpen: false,
        editTitle: '',
        editDescription: '',
        todoId: '',
    });

    useEffect(() => {
        dispatch(getActiveTodo());
    }, []);

    const handleEditOpen = (item) => {
        setEditModalDetails({
            editModalOpen: true,
            editTitle: item.title,
            editDescription: item.description,
            todoId: item._id,
        });
    };

    const onCloseEditModal = (status) => {
        setEditModalDetails({
            editModalOpen: status,
        });
    };

    const onClickAddTodo = () => {
        const data = {
            title: title,
            description: description,
            activeStatus: true,
        };
        dispatch(createTodo(data));
    };
    const onClickDeleteTodo = (id) => {
        dispatch(deleteTodo(id));
    };
    const onClickUpdateTodo = (id) => {
        const data = {
            activeStatus: false,
        };
        dispatch(completeTodo(id, data));
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
                                                    <Button onClick={() => onClickUpdateTodo(item._id)} size="small">
                                                        Complete
                                                    </Button>
                                                    <Button onClick={() => handleEditOpen(item)} size="small">
                                                        Edit
                                                    </Button>
                                                    <Button onClick={() => onClickDeleteTodo(item._id)} size="small">
                                                        Remove
                                                    </Button>
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
            <EditModal
                editModalOpenStatus={editModalOpen}
                title={editTitle}
                description={editDescription}
                id={todoId}
                onClose={onCloseEditModal}
            />
        </div>
    );
}

const mapStateToProps = (state) => {
    const { todo } = state;

    return { todo };
};

export default connect(mapStateToProps)(withRouter(Home));
