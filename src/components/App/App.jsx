import React from 'react';
import './App.css';
// import Gallery
import Gallery from '../Gallery/Gallery'; 

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>
        <p>Gallery goes here</p>
        
        <Gallery />
      </div>
    );
}

export default App;
