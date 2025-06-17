import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import DeleteButton from "../components/DeleteButton";
import NoteInput from "../components/NoteInput";

function DetailPage() {
    const { id } = useParams();
    const note = getNote(id);

    if(id==='new'){
        return(
            <NoteInput />
        );
    }

    if (!note) {
       return <Navigate to="*" />;
    }

    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{note.title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(note.createdAt)}</p>
            <div className="detail-page__body">{note.body}</div>
            <div className="detail-page__action">
                <DeleteButton id={id}/>
            </div>
        </section>
    );
}

export default DetailPage;