/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Grid, Button, TextField, Modal } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import useStyles from './styles';

// components
import Card from '../../components/Card/Card';
import CardHeader from '../../components/Card/CardHeader';
import CardBody from '../../components/Card/CardBody';
import CardFooter from '../../components/Card/CardFooter';

// redux store
import { updateTodo } from '../../store/todo/action';

function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

function EditModal(props) {
    const { editModalOpenStatus, title, description, id } = props;
    const classes = useStyles();
    const dispatch = useDispatch();
    const [modalStyle] = useState(getModalStyle);

    const [{ editTitle, editDescription, todoId }, setEditDetails] = useState({
        editTitle: '',
        editDescription: '',
        todoId: '',
    });

    useEffect(() => {
        setEditDetails({
            editTitle: title,
            editDescription: description,
            todoId: id,
        });
    }, [title, description, id]);

    // action event for edit modal
    const onCloseEditModal = () => {
        props.onClose(false);
    };

    const onChangeUpdateTitle = (e) => {
        setEditDetails((state) => ({
            ...state,
            editTitle: e,
        }));
    };
    const onChangeUpdateDescription = (e) => {
        setEditDetails((state) => ({
            ...state,
            editDescription: e,
        }));
    };

    const onClickUpdateTodo = () => {
        const data = {
            title: editTitle,
            description: editDescription,
        };
        dispatch(updateTodo(todoId, data));
    };

    return (
        <>
            <Modal open={editModalOpenStatus} onClose={onCloseEditModal}>
                <div style={modalStyle} className={classes.modalPaper}>
                    <Card>
                        <CardHeader color="primary">
                            <h4 className={classes.cardTitleWhite}> ToDo Update</h4>
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
                                        defaultValue={editTitle}
                                        onChange={(e) => onChangeUpdateTitle(e.target.value)}
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
                                        defaultValue={editDescription}
                                        onChange={(e) => onChangeUpdateDescription(e.target.value)}
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
                            <Button onClick={() => onClickUpdateTodo()} variant="contained" color="primary">
                                Update
                            </Button>
                        </CardFooter>
                    </Card>
                </div>
            </Modal>
        </>
    );
}

export default EditModal;
