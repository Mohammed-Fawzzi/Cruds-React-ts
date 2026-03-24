import { createContext, useContext, useEffect, useState } from "react";

type ThemeContextType = {
    darkMode: boolean;
    setDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export const ThemeContextProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [darkMode, setDarkMode] = useState<boolean>(
        localStorage.getItem("theme") === "dark"
    );

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [darkMode]);

    return (
        <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useDarkMode = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within ThemeContextProvider");
    }
    return context;
};