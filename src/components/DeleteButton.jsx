import React from "react";
import { useNavigate } from "react-router-dom";
import { deleteNote } from "../utils/network-data";
import { MdDelete } from "react-icons/md";

function DeleteButton({id}){
    const navigate = useNavigate();

    async function deleteAction(){
        const {error} = await deleteNote(id);

        if(error){
            alert("Gagal hapus catatan");
            return;
        }
        navigate("/")
    }

    return(
        <button className="action" onClick={deleteAction}><MdDelete /></button>
    );
}

export default DeleteButton;