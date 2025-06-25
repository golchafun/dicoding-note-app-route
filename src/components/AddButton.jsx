import React from "react";
import { MdAdd } from 'react-icons/md';
import { useNavigate } from "react-router-dom";


function AddButton() {
    const navigate = useNavigate();
    return (
        <button className="action" type="button" title="tambah" onClick={() => navigate('/notes/new')}><MdAdd size={24} /></button>
    );
}

export default AddButton;