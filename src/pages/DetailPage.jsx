import React from "react";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import { showFormattedDate } from "../utils";
import DeleteButton from "../components/DeleteButton";

function DetailPage() {
    const { id } = useParams();
    const note = getNote(id);

    if (!note) {
        return (
            <section>
                <h2>404</h2>
                <p>Page not found</p>
            </section>
        );
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