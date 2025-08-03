import s from "./CharacterPage.module.css"
import {useEffect, useState} from "react";
import axios from "axios";

export const CharacterPage = () => {
    const [characters, setCharacters] = useState([]);


    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character").then((res) => {
            setCharacters(res.data.results);
        })
    }, []);


    return (
        <div className={"page-container"}>
            <h1 className={"pageTitle"}>CharacterPage</h1>
            {characters.length && (
                <div className={s.characters}>
                    {characters.map((character) => {
                        return (
                            <div key={character.id} className={s.character}>
                                <div className={s.characterLink}>{character.name}</div>
                                <img src={character.image} alt={`${character.name} avatar`}/>
                            </div>
                        )
                    })}
                </div>
            )}
        </div>
    )
}