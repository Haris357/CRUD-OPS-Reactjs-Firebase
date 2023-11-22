import React, { useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import { Button, TextField } from '@mui/material';

const AddNote = ({ onNewNote }) => {
  const [note, setNote] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (note.trim() === '') return;

    const notesCollectionRef = collection(db, 'notes');
    const docRef = await addDoc(notesCollectionRef, {
      title: note,
      content: note,
    });

    onNewNote({ title: note, content: note, id: docRef.id });
    setNote('');
  };

  return (
    <div className='bg-white shadow-lg p-3 rounded-1' >
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <TextField
        label="New Note"
        variant="outlined"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        fullWidth
      />
      <Button variant="contained" color="primary" type="submit">
        Add Note
      </Button>
    </form>
    </div>
  );
};

export default AddNote;
