/**
 * 
 * Feel free to change any of this I was just messing around and trying to get a link to the login page set up -- AW
 * This page is set up as the default route for '/' if you look in App.js at the routes...
 */
import logo from './BHlogo.png'
import coding1 from './coding1.png'
import coding2 from './coding2.png'
import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import Grid from '@material-ui/core/Grid'
//import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
// import AppBar from 'material-ui/AppBar'
// import TextField from 'material-ui/TextField'
//import RaisedButton from 'material-ui/RaisedButton'

//import {Container} from 'react-bootstrap'

import './Homepage.css'




class Homepage extends Component {
    render() {
        return (
            <div className="PaddingTop1 MinWidth1">
                <div className="Border1 Padding2">
                    <div className="Border2 Padding2">
                        <div className="Border1">
                            <br/>
                            <img src={logo} className="App-logo1"/>
                            <br/> 
                            
                            <header className="Header1">
                                Beomjin Han
                            </header>
                            
                            <br/>
                            
                            <div>
                                <Grid container spacing={5} className="PaddingSides1">
                                    
                                    <Grid item xs={6}>
                                        <div>
                                            <Link to="/coding">
                                                <button>
                                                    <img 
                                                        src={coding1} 
                                                        onMouseOver={e => (e.currentTarget.src = coding2)}
                                                        onMouseOut={e => (e.currentTarget.src = coding1)}
                                                        alt="coding"
                                                        className="Border1"
                                                    />
                                                </button>
                                            </Link>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className=" Border1 ">    
                                            <header className="Header2">
                                                Fitness
                                            </header>
                                        </div>   
                                    </Grid>
                                </Grid> 
                                
                                
                                <Grid container spacing={5} className="PaddingSides1 ">
                                    <Grid item xs={6}>
                                        <div className=" Border1 ">
                                            <header className="Header2">
                                                Starcraft   
                                            </header>
                                        </div>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <div className=" Border1 ">
                                            <header className="Header2">
                                                Violin
                                            </header>
                                        </div>
                                    </Grid>
                                </Grid> 
                            </div>
                            <br/>    
                        
                        </div>
                    </div>    
                </div>            
            </div>
        )
        
        //return <div className= "Homepage"/>;
    }
}

export default Homepage
