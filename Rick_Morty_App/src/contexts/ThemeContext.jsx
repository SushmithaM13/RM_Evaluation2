import { createContext, useContext, useState } from "react";

const ThemeContext=createContext();

export default function ThemeContextProvider({children}){
    const [theme, setTheme] = useState("light");

    const toggleTheme=()=>{
        setTheme((prev)=>(prev==="light" ? "dark":"light"));
    };
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}
export const useThemeContext=()=>useContext(ThemeContext);