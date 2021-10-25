import React from "react";

import "./App.css";

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import PostsPage from "./pages/PostsPage";
import { Navbar } from "./components/NavBar";
import SinglePostPage from "./pages/SinglePostPage";

function App() {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route exact path="/" component={DashboardPage} />
                <Route exact path="/posts" component={PostsPage} />
                <Route exact path="/posts/:id" component={SinglePostPage} />
                <Redirect to="/" />
            </Switch>
        </Router>
    );
}

export default App;
