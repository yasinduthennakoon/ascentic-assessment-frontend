/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/no-extraneous-dependencies */
import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Menu, Typography } from '@material-ui/core';
import { Person as AccountIcon } from '@material-ui/icons';
import { withRouter } from 'react-router-dom';

// styles
import useStyles from './styles';

// components

function Header(props) {
    const classes = useStyles();

    // global

    // local
    const [profileMenu, setProfileMenu] = useState(null);
    const [name, setUserName] = useState('Yasindu');
    const [email, setUserEmail] = useState('tyasindu@gmail.com');

    const { userName: propUserName, userEmail: propUserEmail, headerText } = props;
    useEffect(() => {
        // setUserName(propUserName);
        // setUserEmail(propUserEmail);
    }, [propUserName, propUserEmail]);

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar className={classes.toolbar}>
                <Typography variant="h6" weight="medium" className={classes.logotype}>
                    {headerText || 'My ToDO'}
                </Typography>
                <div className={classes.grow} />
                <IconButton
                    aria-haspopup="true"
                    color="inherit"
                    className={classes.headerMenuButton}
                    aria-controls="profile-menu"
                    onClick={(e) => setProfileMenu(e.currentTarget)}
                >
                    <AccountIcon classes={{ root: classes.headerIcon }} />
                </IconButton>
                <Menu
                    id="profile-menu"
                    open={Boolean(profileMenu)}
                    anchorEl={profileMenu}
                    onClose={() => setProfileMenu(null)}
                    className={classes.headerMenu}
                    classes={{ paper: classes.profileMenu }}
                    disableAutoFocusItem
                >
                    <div className={classes.profileMenuUser}>
                        <Typography variant="h6" weight="medium">
                            {name}
                        </Typography>
                        <Typography className={classes.profileMenuLink} component="a" color="primary">
                            {email}
                        </Typography>
                    </div>
                    <div className={classes.profileMenuUser}>
                        <Typography className={classes.profileMenuLink} color="primary">
                            Sign Out
                        </Typography>
                    </div>
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(Header);
