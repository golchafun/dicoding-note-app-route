import React from "react";

function NoteItem({ id, title, body, createdAt, archived }) {
    return (
        <article className="note-item">
            <h3 className="note-item__title">
                <a href="/notes/notes-1">{title}</a>
            </h3><p className="note-item__createdAt">{createdAt}</p>
            <p className="note-item__body">{body}</p>
        </article>
    );
}

export default NoteItem;