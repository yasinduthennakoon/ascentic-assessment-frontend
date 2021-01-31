import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// pages
import home from '../pages/home';
import history from '../pages/history';

function privateLayout(props) {
    return (
        <div>
            <Switch>
                <Route path="/app/home" component={home} />
                <Route path="/app/history" component={history} />
            </Switch>
        </div>
    );
}

export default withRouter(privateLayout);
