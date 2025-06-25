import React from "react";
import { MdLogout } from "react-icons/md";
import ThemeButton from "./ThemeComponent";


function Navigation({ logout, name }) {
    if (name === '') {
        return (
            <nav className="navigation">
                <ul>
                    <li>
                        <ThemeButton />
                    </li>
                </ul>
            </nav>
        );
    }
    return (
        <nav className="navigation">
            <ul>
                <li>
                    <ThemeButton />
                </li>
                <li>
                    <button className="button-logout" onClick={logout}><MdLogout />{name}</button>
                </li>
            </ul>
        </nav>
    );

}

export default Navigation;