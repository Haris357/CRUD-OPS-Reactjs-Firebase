import React, { useState } from 'react';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';

const App = () => {
  const [notes, setNotes] = useState([]);

  const handleNewNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div>
      <h1>React Firebase CRUD</h1>
      <AddNote onNewNote={handleNewNote} />
      <NoteList notes={notes} setNotes={setNotes} />
    </div>
  );
};

export default App;
