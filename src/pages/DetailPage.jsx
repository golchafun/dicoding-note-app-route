import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getNote } from "../utils/network-data";
import NoteInput from "../components/NoteInput";
import NoteDetail from "../components/NoteDetail";

function DetailPage() {
    const { id } = useParams();
    const [note, setNote] = useState(null);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (id === 'new') return;

        const fetchNote = async () => {
            const { error, data } = await getNote(id);
            if (error || !data) {
                setNotFound(true);
            } else {
                setNote(data);
            }
        };
        fetchNote();
    }, [id]);

    if (id === 'new') return <NoteInput />;
    if (notFound) return <Navigate to="*" />;
    if (!note) return <p>Loading...</p>;

    return <NoteDetail {...note} />;
}

export default DetailPage;