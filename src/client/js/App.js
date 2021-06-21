import React, {Component} from 'react';

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import Login from "./pages/Login";
import Register from "./pages/Register";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route exact path={'/login'}>
                        <Login />
                    </Route>
                    <Route exact path={'/register'}>
                        <Register />
                    </Route>
                </Switch>
            </Router>
        );
    }
}

export default App
