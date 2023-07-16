import { useEffect, useState, createContext } from "react";
import PokemonAPI from "../utils/pokemonApi";

export const PokemonsContext = createContext(null);

export const PokemonsContextProvider = (props) => {
  function capitalizeFirstLetter(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const [pokemons, setPokemons] = useState([]);
  const fetchData = async () => {
    try {
      const response = await PokemonAPI.get("?limit=300");
      setPokemons(response.data.results);
    } catch (error) {
      console.log(error);
    }
  };
  const typeNames = [
    "Normal",
    "Fighting",
    "Flying",
    "Poison",
    "Ground",
    "Rock",
    "Bug",
    "Ghost",
    "Steel",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Psychic",
    "Ice",
    "Dragon",
    "Dark",
    "Fairy",
  ];
  let pokemonArray = Object.values(pokemons);
  const pokemonsType = [
    {
      name: "normal",
      url: "https://pokeapi.co/api/v2/type/1/",
      pokemon: [],
    },
    {
      name: "fighting",
      url: "https://pokeapi.co/api/v2/type/2/",
      pokemon: [],
    },
    {
      name: "flying",
      url: "https://pokeapi.co/api/v2/type/3/",
      pokemon: [],
    },
    {
      name: "poison",
      url: "https://pokeapi.co/api/v2/type/4/",
      pokemon: [],
    },
    {
      name: "ground",
      url: "https://pokeapi.co/api/v2/type/5/",
      pokemon: [],
    },
    {
      name: "rock",
      url: "https://pokeapi.co/api/v2/type/6/",
      pokemon: [],
    },
    {
      name: "bug",
      url: "https://pokeapi.co/api/v2/type/7/",
      pokemon: [],
    },
    {
      name: "ghost",
      url: "https://pokeapi.co/api/v2/type/8/",
      pokemon: [],
    },
    {
      name: "steel",
      url: "https://pokeapi.co/api/v2/type/9/",
      pokemon: [],
    },
    {
      name: "fire",
      url: "https://pokeapi.co/api/v2/type/10/",
      pokemon: [],
    },
    {
      name: "water",
      url: "https://pokeapi.co/api/v2/type/11/",
      pokemon: [],
    },
    {
      name: "grass",
      url: "https://pokeapi.co/api/v2/type/12/",
      pokemon: [],
    },
    {
      name: "electric",
      url: "https://pokeapi.co/api/v2/type/13/",
      pokemon: [],
    },
    {
      name: "psychic",
      url: "https://pokeapi.co/api/v2/type/14/",
      pokemon: [],
    },
    {
      name: "ice",
      url: "https://pokeapi.co/api/v2/type/15/",
      pokemon: [],
    },
    {
      name: "dragon",
      url: "https://pokeapi.co/api/v2/type/16/",
      pokemon: [],
    },
    {
      name: "dark",
      url: "https://pokeapi.co/api/v2/type/17/",
      pokemon: [],
    },
    {
      name: "fairy",
      url: "https://pokeapi.co/api/v2/type/18/",
      pokemon: [],
    },
  ];

  const [search, setSearch] = useState();
  const handleSearch = (e) => {
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
      const results = await Promise.all(endPoints.map((url) => PokemonAPI.get(url)));

      for (let i = 0; i < 18; i++) {
        pokemonsType[i].pokemon = results[i].data.pokemon;
      }
      setType(pokemonsType[btn].pokemon);
    } catch (error) {
      console.log(error);
    }
  };

  const updatedPoke = pokemonArray.filter((pokemon) =>
    type.some((selected) => selected.pokemon.name == pokemon.name)
  );
  const [btnColor, setBtnColor] = useState();
  let finalPokemons = pokemonArray;
  if (search) {
    const searchResult = pokemonArray.filter((e) => {
      return e.name.toLowerCase().includes(search.toLowerCase());
    });
    finalPokemons = Object.values(searchResult);
  } else if (btn == "All Pokes") {
    finalPokemons = pokemonArray;
  } else if (btn) {
    finalPokemons = updatedPoke;
  }

  const handleBtn = (i) => {
    setBtnColor(i);
    setBtn(i);
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
        pokemons,
        finalPokemons,
        capitalizeFirstLetter,
      }}
    >
      {props.children}
    </PokemonsContext.Provider>
  );
};
