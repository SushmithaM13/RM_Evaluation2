import { useSearchParams } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext"
import CharacterList from "../components/characterList";

console.log("home ");

export default function Home(){
    const {toggleTheme}=useThemeContext();
    const [searchParams,setSearchParams]=useSearchParams();
    console.log("home");

    const handleSearch=(e)=>{
        setSearchParams({name:e.target.value});
    };

    return(
        <>
        <h1>Rick and Morty Explorer</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <input type="text" placeholder="Serach by name" value={searchParams.get("name") || ""}
        onChange={handleSearch} style={{margin:"10px", padding:"10px",width:"200px"}}/>
        <CharacterList/>
        </>
    )
}