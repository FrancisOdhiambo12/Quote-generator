import React from 'react';
import QouteContainer from "./QouteContainer";
import './App.css';

class App extends React.Component {
    render() {
      return (
        <div className="App">
          <h1>REACT RANDOM QUOTES GENERATOR</h1>
          <QouteContainer />
        </div>
      );
    }
}


export default App;
