import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

// pages
import signin from '../pages/signin';
import signup from '../pages/signup';

function publicLayout(props) {
    return (
        <div>
            <Switch>
                <Route path="/auth/signin" component={signin} />
                <Route exact path="/auth" render={() => <Redirect to="/auth/signin" />} />
                <Route path="/auth/signup" component={signup} />
            </Switch>
        </div>
    );
}

export default withRouter(publicLayout);
