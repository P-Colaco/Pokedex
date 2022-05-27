import React, {userState, useState} from "react";   
import { searchPokemon } from "../api";

const Searchbar = () => {
    
    const [search, setSearch] = useState("ditto")
    const [pokemon, setPokemon] = useState()
    const onChangeHandler = (e) => {
        setSearch(e.target.value) 
    }

    const onButtonClickHandler = () => {
        onSearchHandler(search)
    }

    const onSearchHandler = async (pokemon) => {
        const result = await searchPokemon(pokemon)
        setPokemon(result)
    
      }
      
    return (
        <div className="searchbar-container">
            <div className="searchbar">
                <input placeholder="Search Pokemon" onChange = {onChangeHandler}/>  
            </div>
            <div className="searchbar-btn">
                <button onClick={onButtonClickHandler}>Search</button>
            </div>
            {pokemon ? (
                <div>
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    <div>Name: {pokemon.name}</div>
                    <div>Types: {pokemon.types[0].type.name}</div>
                </div>
            ) :  null}
        </div>
    )
}

export default Searchbar