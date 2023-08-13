import { useEffect, useState, createContext } from 'react';
import PokemonAPI from '../utils/pokemonApi';
import { pokemonsType, typeNames } from '../data/pokeType';

export const PokemonsContext = createContext(null);

export const PokemonsContextProvider = props => {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const [pokemons, setPokemons] = useState([]);
  const fetchData = async () => {
    try {
      const response = await PokemonAPI.get('?limit=300');
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  let pokemonArray = Object.values(pokemons);

  const [search, setSearch] = useState();
  const handleSearch = e => {
    setSearch(e.target.value);
  };
  const [type, setType] = useState([]);
  const [btn, setBtn] = useState();
  const endPoints = [];
  for (let i = 1; i <= 18; i++) {
    endPoints.push(`https://pokeapi.co/api/v2/type/${i}/`);
  }

  const fetchPokemonType = async () => {
    try {
      const results = await Promise.all(endPoints.map(url => PokemonAPI.get(url)));

      for (let i = 0; i < 18; i++) {
        pokemonsType[i].pokemon = results[i].data.pokemon;
      }
      setType(pokemonsType[btn]?.pokemon);
    } catch (error) {
      console.log(error);
    }
  };

  const updatedPoke = pokemonArray.filter(pokemon =>
    type?.some(selected => selected.pokemon.name == pokemon.name),
  );

  const extractNumberFromUrl = url => {
    const regex = /\/(\d+)\//;
    const match = url.match(regex);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  };

  const [btnColor, setBtnColor] = useState();
  let finalPokemons = pokemonArray;
  if (search) {
    const searchResult = pokemonArray.filter(e => {
      return e.name.toLowerCase().includes(search.toLowerCase());
    });
    finalPokemons = Object.values(searchResult);
  } else if (btn == 'All Pokes') {
    finalPokemons = pokemonArray;
  } else if (btn) {
    finalPokemons = updatedPoke;
  }

  const handleBtn = event => {
    setBtnColor(event.target.value);
    setBtn(event.target.value);
    setSearch(null);
  };
  useEffect(() => {
    fetchPokemonType();
  }, [btn]);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <PokemonsContext.Provider
      value={{
        typeNames,
        pokemons,
        search,
        handleSearch,
        handleBtn,
        btnColor,
        finalPokemons,
        capitalizeFirstLetter,
        extractNumberFromUrl,
        btn,
        setBtn,
      }}
    >
      {props.children}
    </PokemonsContext.Provider>
  );
};
