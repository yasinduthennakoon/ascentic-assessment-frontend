import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';

// pages
import home from '../pages/home';

function privateLayout(props) {
    return (
        <div>
            <Switch>
                <Route path="/app/home" component={home} />
            </Switch>
        </div>
    );
}

export default withRouter(privateLayout);
