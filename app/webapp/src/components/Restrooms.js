import React, { Component } from 'react';
import { Switch, Route, Link, Redirect } from 'react-router-dom';
import SearchBox from './SearchBox';
import RestroomsListView from './RestroomsListView';
import RestroomsMapView from './RestroomsMapView';
import RestroomDetails from './RestroomDetails';

class RestroomsList extends Component {
    render() {
        return (
            <div>
                <h1>Restrooms</h1>
                <SearchBox />
                <Link to={'/restrooms/list'}>List</Link>
                <Link to={'/restrooms/map'}>Map</Link>
                <Switch>
                    <Route path="/restrooms/list" component={RestroomsListView} />
                    <Route path="/restrooms/map" component={RestroomsMapView} />
                    <Route path="/restrooms/:restroomId" component={RestroomDetails} />
                    <Redirect from="/restrooms" to="/restrooms/list" />
                </Switch>
            </div>
        );
    }
}

export default RestroomsList;
