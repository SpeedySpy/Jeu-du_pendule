import React from 'react';
import './App.css';
import Contenu from './contenu'
import ThemeContextProvider from './context';
import BtnToggle from './btnToggle';
import CallApi from './callApi';
import Score from './score';

function App() {
  return (
    <div className="App">
     <ThemeContextProvider>
       <BtnToggle/>
       <Contenu/>
      </ThemeContextProvider> 
      <CallApi/>
      <h1>Voici la liste des scores</h1>
      <Score/>
    </div>

  );
}

export default App;