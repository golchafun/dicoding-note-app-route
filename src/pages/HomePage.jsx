import React from "react";
import AddButton from "../components/AddButton";
import NoteList from "../components/NoteList";
import { getAllNotes } from "../utils/local-data";

function HomePage(){
    const notes = getAllNotes();

    return(
        <section className="homepage">
        
            <h2>Catatan Aktif</h2>

            {/* akses notes list */}
            <NoteList notes = {notes}/>

            {/* button add note */}
            <div className="homepage__action">
                <AddButton />
            </div>
        </section>
    );
}

export default HomePage;