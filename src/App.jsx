import React, { useState } from 'react';
import NoteForm from './componentes/NoteForm';
import NoteList from './componentes/NoteList';
import NoteFilter from './componentes/NoteFilter';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [filter, setFilter] = useState('Todos');

  const addNote = (text, priority) => {
    setNotes([...notes, { text, priority, id: Date.now() }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter(note => note.id !== id));
  };

  const filteredNotes = notes.filter(note => {
    return filter === 'Todos' || note.priority === filter;
  });

  return (
    <div>
      <h1>Notas</h1>
      <NoteForm addNote={addNote} />
      <NoteFilter setFilter={setFilter} />
      <NoteList notes={filteredNotes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
