import React from 'react';

const NoteList = ({ notes, deleteNote }) => {
    return (
        <ul>
            {notes.map(note => (
                <li key={note.id}>
                    {note.text} - Prioridad: {note.priority}
                    <button onClick={() => deleteNote(note.id)} style={{backgroundColor:'red', color:'white'}}>Eliminar</button>
                </li>
            ))}
        </ul>
    );
};

export default NoteList;
