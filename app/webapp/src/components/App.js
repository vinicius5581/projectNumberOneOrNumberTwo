import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Root from './Root';

class App extends Component {
    render() {
        return (
            <Router>
                <Root />
            </Router>
        );
    }
}

export default App;
