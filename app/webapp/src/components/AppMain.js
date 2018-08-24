import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './AppMain.scss';

import Restrooms from './Restrooms';
import CreateRestroom from './CreateRestroom';
import Profile from './Profile';
import MyFavorites from './MyFavorites';
import MyHistory from './MyHistory';
import Login from './Login';
import Error404 from './Error404';

class AppMain extends Component {
    render() {
        return (
            <main className="app-main">
                <Switch>
                    <Route path="/create-restroom" component={CreateRestroom} />
                    <Route path="/profile" component={Profile} />
                    <Route path="/favorites" component={MyFavorites} />
                    <Route path="/history" component={MyHistory} />
                    <Route path="/login" component={Login} />
                    <Route path="/restrooms" component={Restrooms} />
                    <Route path="/404" component={Error404} />
                    <Redirect from="/" to="/restrooms" />
                    <Redirect from="*" to="/404" />
                </Switch>
            </main>
        );
    }
}

export default AppMain;
