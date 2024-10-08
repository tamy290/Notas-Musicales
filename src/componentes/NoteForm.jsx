import React, { useState } from 'react';

const NoteForm = ({ addNote }) => {
    const [text, setText] = useState('');
    const [priority, setPriority] = useState('Alto');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (text.trim()) {
            addNote(text, priority);
            setText('');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Escribe tu nota"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                <option value="Alto">Alto</option>
                <option value="Medio">Medio</option>
                <option value="Bajo">Bajo</option>
            </select>
            <button type="submit" style={{ backgroundColor: 'blue', color: 'white' }}>
  Agregar Nota</button>
        </form>
    );
};

export default NoteForm;
