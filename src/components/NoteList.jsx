import React from "react";
import NoteItem from "./NoteItem";

function NoteList({ notes }) {

    if (!notes || notes.length === 0) {
        return <p className="notes-list__empty-message">Tidak ada catatan</p>;
    }

    return (
        <section className="notes-list">
            <NoteItem {...notes[0]} />
            
        </section>
    );
}

export default NoteList;