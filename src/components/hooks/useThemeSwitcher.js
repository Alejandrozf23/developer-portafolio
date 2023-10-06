import React, { useEffect, useState } from "react";

const useThemeSwitcher = () => {
    const preferDarkQuery = "(prefer-color-schema: dark)";
    const [mode, setMode] = useState("");

    const setTheme = (theme) => {
        if (theme === "dark") {
            window.localStorage.setItem("theme", "dark");
            document.documentElement.classList.add("dark");
        } else {
            window.localStorage.setItem("theme", "light");
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        const mediaQuery = window.matchMedia(preferDarkQuery);
        const userPref = window.localStorage.getItem("theme");

        const handleChange = () => {
            
            if (userPref) {
                let check = userPref === "dark" ? "dark" : "light";
                setMode(check);
                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            } else {
                let check = mediaQuery.matches ? "dark" : "light";
                setMode(check);
                
                if (check === "dark") {
                    document.documentElement.classList.add("dark");
                } else {
                    document.documentElement.classList.remove("dark");
                }
            }
            console.log(window.localStorage);
        }        
        handleChange();

        mediaQuery.addEventListener('change', handleChange);
    
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        setTheme(mode);
    }, [mode]);

    return [mode, setMode]
}

export default useThemeSwitcher