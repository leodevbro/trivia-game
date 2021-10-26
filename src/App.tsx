import React from "react";

import "./App.scss";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";



import WelcomePage from "./pages/WelcomePage";
import GameplayPage from "./pages/GameplayPage";
import ScorePage from "./pages/ScorePage";

function App() {
    return (
        <Router>
            {/* <Navbar /> */}
            <Switch>
                <Route exact path="/" component={WelcomePage} />
                <Route exact path="/playing" component={GameplayPage} />
                <Route exact path="/score" component={ScorePage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;
