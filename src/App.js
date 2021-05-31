import React from 'react';
import ReactDOM from 'react-dom';
import Header from './sidebar';
import SearchPage from './components/searchbar';
import Note from './components/note';
import Card from './components/card';
function App() {
  return (
    <div className="App">
    <div><Header/></div>
     <SearchPage />
     <Card/>
     </div>
  );
}

export default App;
