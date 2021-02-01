/* eslint-disable react/no-unescaped-entities */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// redux store
import { signinAction } from '../../store/auth/action';

// styles
import useStyles from './styles';

export default function SignIn(props) {
    const { history } = props;
    const classes = useStyles();
    const dispatch = useDispatch();

    const [username, setUsername] = useState('tyasindu@gmail.com');
    const [password, setPassword] = useState('Admin@1234');

    const onLoginClick = () => {
        dispatch(signinAction(username, password, history));
    };
    const onsignupClick = () => {
        history.push('/auth/signup');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <div className={classes.form} noValidate>
                    <TextField
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    />
                    <TextField
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                    />

                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={username.length === 0 || password.length === 0}
                        onClick={onLoginClick}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs />
                        <Grid item>
                            <Link component="button" variant="body2" onClick={onsignupClick}>
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </Container>
    );
}
