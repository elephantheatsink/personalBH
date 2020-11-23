
import React from 'react';

// import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Homepage from './components/Homepage';
import Violin from './components/Violin';
import Starcraft from './components/Starcraft';
import Fitness from './components/Fitness';
import Coding from './components/Coding';

import './App.css';



function App() {
  return (
    <div className="App">
      <div className="container">

          
            {/* <Header/> */}
            <BrowserRouter>
            <Switch>

              <Route path='/' exact component={Homepage}/>
              <Route path='/violin' exact component={Violin}/>
              <Route path='/starcraft' exact component={Starcraft}/>
              <Route path='/fitness' exact component={Fitness}/>
              <Route path='/coding' exact component={Coding}/>
           

            </Switch>
            </BrowserRouter>
           
      </div>
    </div>
  );
}

export default App;


{/*
import logo from './BHlogo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code>you have no idea what's coming</code>
        </p>
  */}                                                          
        {/* 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        */} 
        {/*remove learn react link*/}
{/*}
      </header>
    </div>
  );
}

export default App;
*/}