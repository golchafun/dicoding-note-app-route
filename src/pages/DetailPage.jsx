import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getNote } from "../utils/local-data";
import NoteInput from "../components/NoteInput";
import NoteDetail from "../components/NoteDetail";

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
        <NoteDetail {...note}/>
    );
}

export default DetailPage;