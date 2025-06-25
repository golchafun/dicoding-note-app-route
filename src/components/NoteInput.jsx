import React, { useRef } from "react";
import { MdOutlineCheck } from "react-icons/md";
// import { addNote } from "../utils/local-data";
import { addNote } from "../utils/network-data";
import { useNavigate } from "react-router-dom";
import useInput from "./UseInput";

function NoteInput() {
    const [title, onTitleChange] = useInput("");
    const bodyRef = useRef(null);
    const navigate = useNavigate();

    function onSubmitHandler(){
        const noteBody = bodyRef.current.innerHTML;
        addNote({title, body: noteBody});
        navigate("/");
    }


    return (
        <section className="add-new-page">
            <div className="add-new-page__input">
                <input
                    className="add-new-page__input__title"
                    type="text"
                    placeholder="Catatan rahasia"
                    value={title}
                    onChange={onTitleChange} />
                <div
                    className="add-new-page__input__body"
                    data-placeholder="Sebenarnya saya adalah ...."
                    contentEditable
                    ref={bodyRef}
                />
            </div>

            <div className="add-new-page__action">
                <button className="action" onClick={onSubmitHandler}><MdOutlineCheck /></button>
            </div>

        </section>
    )
}
export default NoteInput;