// src/Note.js
import React from 'react';
import firestore from '../firebaseConfig.js';
import { Button, Card, CardContent, Typography } from '@mui/material';

function Note({ note }) {
  const deleteNote = async () => {
    try {
      await firestore.collection('notes').doc(note.id).delete();
    } catch (error) {
      console.error("Error deleting note: ", error);
    }
  };

  return (
    <div className='shadow-lg p-3 rounded-1 bg-white' >
    <Card variant="outlined" style={{ marginBottom: '10px' }}>
      <CardContent>
        <Typography variant="body2">{note.content}</Typography>
        <Button onClick={deleteNote} variant="outlined" color="secondary">
          Delete
        </Button>
      </CardContent>
    </Card>
    </div>
  );
}

export default Note;
