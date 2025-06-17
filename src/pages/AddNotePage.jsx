import React, { useRef, useState } from "react";
import { MdOutlineCheck } from "react-icons/md";
import { addNote } from "../utils/local-data";
import { useNavigate } from "react-router-dom";

function AddNotePage() {

    const [title, setTitle] = useState("");
    const bodyRef = useRef(null);
    const navigate = useNavigate();

    function onTitleChange(event) {
        setTitle(event.target.value);
    }

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
export default AddNotePage;