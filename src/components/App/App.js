import React from "react";
import {BrowserRouter as Router, Redirect, Route, Switch} from "react-router-dom";
import {Container} from "react-bootstrap";

import "./App.css"
import TodoApp from "../../routes/TodoApp";
import Form from "../../routes/Form";
const App = () =>{
        return(
            <Container className="todo-app">
                <Router>
                    <Switch>
                        <Route path="/todoApp" component={TodoApp()}/>
                        <Route path="/login" component={Form}/>
                        <Redirect to="/login"/>
                    </Switch>
                </Router>
            </Container>
        );
    };

export default App;

