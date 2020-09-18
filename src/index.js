import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom";

import AppContainer from "./containers/AppContainer";
import {WithFireStore} from "./components/HOC";


ReactDOM.render(
    <Router>
        <WithFireStore>
            <AppContainer/>
        </WithFireStore>
    </Router>,
     document.getElementById('root'));