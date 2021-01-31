/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { useSelector } from 'react-redux';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';

// routes
import privateLayout from './routes/privateLayout';
import publicLayout from './routes/publicLayout';

function App() {
    const { isAuthenticated } = useSelector((state) => state.auth);
    return (
        <HashRouter>
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => {
                        return <Redirect to="/app/home" />;
                    }}
                />
                <Route
                    exact
                    path="/app"
                    render={(props) => {
                        return <Redirect to="/app/home" />;
                    }}
                />
                <PrivateRoute path="/app" component={privateLayout} />
                <PublicRoute path="/auth" component={publicLayout} />
                <Route component={Error} />
            </Switch>
        </HashRouter>
    );

    function PrivateRoute({ component, ...rest }) {
        // console.log(` pvt isauth = ${isAuthenticated}`);
        return (
            <Route
                {...rest}
                render={(props) =>
                    isAuthenticated ? (
                        React.createElement(component, props)
                    ) : (
                        <Redirect
                            to={{
                                pathname: '/auth',
                                state: {
                                    from: props.location,
                                },
                            }}
                        />
                    )
                }
            />
        );
    }

    function PublicRoute({ component, ...rest }) {
        // console.log(` public isauth = ${isAuthenticated}`);
        return (
            <Route
                {...rest}
                render={(props) =>
                    isAuthenticated ? (
                        <Redirect
                            to={{
                                pathname: '/',
                            }}
                        />
                    ) : (
                        React.createElement(component, props)
                    )
                }
            />
        );
    }
}

export default App;
