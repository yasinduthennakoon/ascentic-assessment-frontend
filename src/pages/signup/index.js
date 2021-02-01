import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, CssBaseline, TextField, Link, Grid, Typography, Container, Box } from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

// styles
import useStyles from './styles';

// redux store
import { signupAction } from '../../store/auth/action';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

export default function SignUp(props) {
    const { history } = props;
    const classes = useStyles();
    const dispatch = useDispatch();

    const [{ firstName, lastName, email, password }, setUserDetails] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const onChangesValues = (e) => {
        const inputId = e.target.id;
        const { value } = e.target;
        setUserDetails((oldState) => {
            const newObj = {
                ...oldState,
                [inputId]: value,
            };
            return newObj;
        });
    };

    const onsignupClick = () => {
        console.log(firstName, lastName, email, password);
        const data = {
            firstName,
            lastName,
            email,
            password,
        };
        dispatch(signupAction(data, history));
    };
    const onsigninClick = () => {
        history.push('/auth/signin');
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <div className={classes.form} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={firstName}
                                onChange={(event) => onChangesValues(event)}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={lastName}
                                onChange={(event) => onChangesValues(event)}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={email}
                                onChange={(event) => onChangesValues(event)}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={password}
                                onChange={(event) => onChangesValues(event)}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        disabled={
                            firstName.length === 0 ||
                            lastName.length === 0 ||
                            email.length === 0 ||
                            password.length === 0
                        }
                        onClick={onsignupClick}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link component="button" variant="body2" onClick={onsigninClick}>
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Box mt={5}>
                <Copyright />
            </Box>
        </Container>
    );
}
