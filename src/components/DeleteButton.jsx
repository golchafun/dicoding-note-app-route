import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../utils/local-data";
import { MdDelete } from "react-icons/md";

function DeleteButton({id}){
    const navigate = useNavigate();

    function deleteAction(){
        deleteNote(id);
        navigate("/")
    }

    return(
        <button className="action" onClick={deleteAction}><MdDelete /></button>
    );
}

export default DeleteButton;