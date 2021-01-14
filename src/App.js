import React from 'react'
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenido Andres a tu lista de quehaceres</h1>
        <form>
            <input type="text" size="40" placeholder="Add to do..."/>
            <input type="submit" name="button" value="Add"/>
        </form>
        
      </header>
    </div>
  );
}

export default App;