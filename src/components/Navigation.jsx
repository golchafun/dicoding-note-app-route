import React from "react";
import { MdLogout } from "react-icons/md";


function Navigation({logout, name}) {
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <button className="button-logout" onClick={logout}><MdLogout />{name}</button>
                </li>
            </ul>
        </nav>
    );

}

export default Navigation;