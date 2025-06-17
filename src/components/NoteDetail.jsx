import React from "react";
import { showFormattedDate } from "../utils";
import DeleteButton from "../components/DeleteButton";

function NoteDetail({ id, title, createdAt, body }) {
    return (
        <section className="detail-page">
            <h3 className="detail-page__title">{title}</h3>
            <p className="detail-page__createdAt">{showFormattedDate(createdAt)}</p>
            <div className="detail-page__body">{body}</div>
            <div className="detail-page__action">
                <DeleteButton id={id} />
            </div>
        </section>
    );
}

export default NoteDetail;