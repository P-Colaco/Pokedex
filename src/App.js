import React, {useEffect, useState} from "react";
import { getPokemonData, getPokemons } from "./api";
import "./App.css";
import Navbar from "./Components/Navbar";
import Pokedex from "./Components/pokedex";
import Searchbar from "./Components/Searchbar";

function App() {

  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons()
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  }

  useEffect ( () => {
    console.log("Loaded")
    fetchPokemons();
  }, [])
  
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex pokemons={pokemons} loading={loading}/>
      <div className="App">
      </div>
    </div>
  );
}

export default App;
