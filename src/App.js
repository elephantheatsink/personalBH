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
      </header>
    </div>
  );
}

export default App;