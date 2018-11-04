import React, { Component } from "react";
import { connect } from "react-redux";

import { updateUser, apiRequest } from "../state/actions/user";

import Header from "../components/Header";
import GetGitHubUser from "./GetGitHubUser";
import "./App.css";

import { history } from "../history";
import { Router, Route, Switch } from "react-router-dom";
import Page from "./Page";

class App extends Component {
    componentDidMount() {
        this.props.onApiRequest();
    }

    onUpdateUserClick = () => {
        this.props.onUpdateUser("Nanda");
    };

    onUpdateUserChange = e => {
        this.props.onUpdateUser(e.target.value);
    };

    render() {
        return (
            <div className="App">
                <Header />
                <div onClick={this.onUpdateUserClick}>Update user</div>
                <input onChange={this.onUpdateUserChange} />
                {this.props.user}
                <div className={"app-content"}>
                    <GetGitHubUser />
                    <Router history={history}>
                        <Switch>
                            <Route exact={true} path={"/"} component={Page} />
                            <Route exact={true} path={"/:path"} component={Page} />
                        </Switch>
                    </Router>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state, props) => {
    console.log("mapStateToProps props", props);
    return {
        products: state.products,
        user: state.user,
        userPlusProp: `${state.user} ${props.someProp}`
    };
};

const mapActionsToProps = {
    onUpdateUser: updateUser,
    onApiRequest: apiRequest
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(App);
