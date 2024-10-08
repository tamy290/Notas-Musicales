import React from 'react';

const NoteFilter = ({ setFilter }) => {
    return (
        <div>
            <select onChange={(e) => setFilter(e.target.value)}>
                <option value="Todos">Todos</option>
                <option value="Alto">Alto</option>
                <option value="Medio">Medio</option>
                <option value="Bajo">Bajo</option>
            </select>
        </div>
    );
};

export default NoteFilter ;