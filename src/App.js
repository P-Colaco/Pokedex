import React, {useEffect, useState} from "react";
import { getPokemonData, getPokemons } from "./api";
import "./App.css";
import Navbar from "./Components/Navbar";
import Pokedex from "./Components/pokedex";
import Searchbar from "./Components/Searchbar";

function App() {

  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState([]);

  const itensPerPage = 25
  const fetchPokemons = async () => {
    try {
      setLoading(true)
      const data = await getPokemons(itensPerPage, itensPerPage * page)
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url)
      })

      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / itensPerPage))
    } catch (error) {
      console.log("fetchPokemons error: ", error);
    }
  }

  useEffect ( () => {
    console.log("Loaded")
    fetchPokemons();
  }, [page])
  
  return (
    <div>
      <Navbar />
      <Searchbar />
      <Pokedex
        pokemons={pokemons}
        loading={loading}
        page={page}
        setPage={setPage}
        totalPages={totalPages}
        />
    </div>
  );
}

export default App;
