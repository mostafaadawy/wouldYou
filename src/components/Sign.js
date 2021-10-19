import React, { Component } from "react";
import {Redirect, Route, Switch } from "react-router-dom"
import Login from './Login'
import Register from './Register'
class Sign extends Component{
    render(){
        return(
                <Switch>
                    <Route exact path="/">
                        <Redirect to='/login'/>
                    </Route>
                    <Route exact path="/login">
                        <Login/>
                    </Route>
                    <Route exact path="/register">
                        <Register/>
                    </Route>
                </Switch>
            )}
}
export default Sign