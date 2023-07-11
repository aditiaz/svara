import { createContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

export const PokemonsContext = createContext(null);

export const PokemonsContextProvider = (props) => {
  const [pokemons, setPokemons] = useState([]);
  const fetchData = async () => {
    try {
      const response = await axios.get("https://pokeapi.co/api/v2/pokemon/?limit=300");
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        pokemons,
      }}
    >
      {props.children}
    </PokemonsContext.Provider>
  );
};
