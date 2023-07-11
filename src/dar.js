import React, { useEffect, useState } from "react";
import axios from "axios";

function PokemonFilterByType() {
  const [pokemonNames, setPokemonNames] = useState([]);
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchType = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/type/13/");
        const pokemonData = response.data.pokemon;
        const names = pokemonData.map((pokemon) => pokemon.pokemon.name);
        setPokemonNames(names);
      } catch (error) {
        console.log(error);
      }
    };

    const fetchData = async () => {
      try {
        const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=300");
        const pokemonResults = response.data.results;
        const filteredPokemons = pokemonResults.filter((pokemon) =>
          pokemonNames.includes(pokemon.name)
        );
        setPokemons(filteredPokemons);
      } catch (error) {
        console.log(error);
      }
    };

    fetchType();
    fetchData();
  }, [pokemonNames]);

  return (
    <div>
      <h2>Pokémon Filter By Type</h2>
      <ul>
        {pokemons.map((pokemon, index) => (
          <li key={index}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PokemonFilterByType;
