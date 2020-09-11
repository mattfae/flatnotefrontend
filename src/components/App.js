import React from 'react';
import '../App.css';
import { Switch, Route } from 'react-router-dom'
import Navbar from './Navbar';
import NotesContainer from './NotesContainer'
import NewNoteForm from './NewNoteForm'


function App() {

  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path='/' component={NotesContainer} />
        <Route path='notes/new' component={NewNoteForm} />
      </Switch>
    </div>
  );
}

export default App;
