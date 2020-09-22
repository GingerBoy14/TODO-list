import React from "react";
import {  Route, Switch } from "react-router-dom";
import {
    FormContainer,
    TodoAppContainer
} from "../../containers";
import Loading from "../Loading";

import "./App.scss"

//location need to correct work switch animation

const App = ({ userProfile, userId, location }) =>(

        <div className="todo-app container">
            {!userProfile.isLoaded&&!userProfile.email ? <Loading/>
                : <Switch location={location}>
                    <Route path="/todoApp">
                        <TodoAppContainer userId={userId}/>
                    </Route>
                    <Route path="/user" component={FormContainer}/>

                </Switch>
            }

        </div>
);


export default App;

