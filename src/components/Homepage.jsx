/**
 * 
 * Feel free to change any of this I was just messing around and trying to get a link to the login page set up -- AW
 * This page is set up as the default route for '/' if you look in App.js at the routes...
 */
import logo from './BHlogo.png'
import React, { Component } from 'react'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
//import RaisedButton from 'material-ui/RaisedButton'
import { NavLink } from 'react-router-dom'
//import {Container} from 'react-bootstrap'

import './Homepage.css'




class Homepage extends Component {
    render() {
        return (
            <div>
                <br/><br/> <br/> 
                <img src={logo} className="App-logo" alt="logo" />
                <br/><br/> <br/> 
                <p>
                <code>you have no idea what's coming</code>
                </p>   
                <br/><br/> <br/> 
                <br/> <br/> <br/>
                   

                
                
            </div>
        )
        
        //return <div className= "Homepage"/>;
    }
}

export default Homepage
