import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useThemeContext } from "../contexts/ThemeContext";

export default function CharacterList(){
    const [chars, setChar]=useState([]);
    const [error, setError]=useState("");
    const [loading, setLoading]=useState(false);
    const [searchParams]=useSearchParams();
    const nameQuery=searchParams.get("name") || "";
    const {theme}=useThemeContext();

    useEffect(()=>{
        const fetchCharacters=async()=>{
            setLoading(true);
            setError("");
            try{
                const res=await fetch(`https://rickandmortyapi.com/api/character/?name=${nameQuery}`);
                if(!res.ok){
                    if(res.status===404){
                        setChar([])
                        setError("No results found")
                    }else{
                        throw new Error("Failed to fetch data");
                    }
                }else{
                    const data=await res.json();
                    setChar(data.res);
                }
            }catch(err){
                setError("Error fetching data"+err);
            }finally{
                setLoading(false);
            }
        };
        fetchCharacters();
    },[nameQuery])

    if(loading) return <p>loading</p>
    if(error) return <p>{error}</p>


    return(
    <div className={`char-grid ${theme}`}>
        {chars.map((char)=>(
            <div key={char.id}>
                <img src={char.image} alt={char.name}/>
                <h3>{char.name}</h3>
            </div>
        ))}
    </div>
    )
}