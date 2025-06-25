import React, { useState, useCallback, useEffect } from "react";
import { ThemeProvider } from "../context/ThemeContext";
import ToggleTheme from "./ToggleTheme";

function ThemeComponent() {
    const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    }, []);

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const contextValue = { theme, toggleTheme };

    return (
        <ThemeProvider value={contextValue}>
            <ToggleTheme />
        </ThemeProvider>
    );
}

export default ThemeComponent;