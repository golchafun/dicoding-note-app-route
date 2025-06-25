import React, { useEffect, useState } from "react";
import AddButton from "../components/AddButton";
import NoteList from "../components/NoteList";
import { getActiveNotes } from "../utils/network-data";

function HomePage() {
    // const notes = getAllNotes();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        getActiveNotes().then(({ data }) => {
            setNotes(data)
        })
    },[]);

    return (
        <section className="homepage">

            <h2>Catatan Aktif</h2>

            <NoteList notes={notes} />

            <div className="homepage__action">
                <AddButton />
            </div>
        </section>
    );
}

export default HomePage;