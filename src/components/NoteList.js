import React, { useEffect, useState } from 'react';
import { db } from '../firebaseConfig';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { List, ListItem, ListItemText, Button } from '@mui/material';

const NoteList = () => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesCollectionRef = collection(db, 'notes');
      const data = await getDocs(notesCollectionRef);
      setNotes(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    fetchNotes();
  }, []);

  const handleDelete = async (id) => {
    const noteDocRef = doc(db, 'notes', id);
    await deleteDoc(noteDocRef);
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className='shadow-lg p-3 rounded-1 bg-white' >
    <h2>Notes</h2>
    <List>
      {notes.map((note) => (
        <ListItem key={note.id} divider>
          <ListItemText primary={note.title} secondary={note.content} />
          <Button onClick={() => handleDelete(note.id)} variant="contained" color="secondary">
            Delete
          </Button>
        </ListItem>
      ))}
    </List>
  </div>
  );
};

export default NoteList;
