import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { PokemonsContext } from "../context/pokemonContext";
import ash from "../assets/pictures/ash.png";
import pokeAlt from "../assets/pictures/pokeAlt.png";
import axios from "axios";
import PokemonAPI from "../utils/pokemonApi";

const Home = () => {
  const { pokemons } = useContext(PokemonsContext);
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
    {
      name: "unknown",
      url: "https://pokeapi.co/api/v2/type/10001/",
      pokemon: [],
    },
    {
      name: "shadow",
      url: "https://pokeapi.co/api/v2/type/10001/",
      pokemon: [],
    },
  ];
  const [type, setType] = useState([]);

  // const fetchType = async () => {
  //   try {
  //     const response = await axios.get("https://pokeapi.co/api/v2/type/13/");
  //     setType(response.data.pokemon);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // fetchType();
  // console.log(type);
  const [search, setSearch] = useState();
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  if (search) {
    const searchResult = pokemonArray.filter((e) => {
      return e.name.toLowerCase().includes(search.toLowerCase());
    });
    pokemonArray = Object.values(searchResult);
  }

  const endPoints = [];
  for (let i = 1; i <= 18; i++) {
    endPoints.push(`https://pokeapi.co/api/v2/type/${i}/`);
  }
  endPoints.push("https://pokeapi.co/api/v2/type/10001/", "https://pokeapi.co/api/v2/type/10002/");
  // console.log(endPoints);

  const fetchPokemonType = async () => {
    try {
      const results = await Promise.all(endPoints.map((url) => PokemonAPI.get(url)));
      for (let i = 1; i <= 18; i++) {
        pokemonsType[i].pokemon = results[i].data.pokemon;
      }
      console.log(pokemonsType[16].pokemon);
    } catch (error) {
      console / log(error);
    }
  };
  useEffect(() => {
    fetchPokemonType();
  }, []);

  return (
    <>
      <div className=" w-screen h-full">
        <div className="flex justify-center ">
          <div className="mt-5 flex items-center fixed bg-white border-blue-400 rounded-md border-2 bg-opacity-70 h-20 w-[40%]">
            <input
              className="w-[45%]  h-10 border-blue-400 border-2 rounded-md ml-6"
              value={search}
              onChange={handleSearch}
              type="text"
              placeholder="Search by Pokemon name ..."
            />
          </div>
        </div>
        <div className="flex justify-center w-screen">
          <div className="grid grid-cols-4 gap-7 gap-x-11 gap-y-7  my-36">
            {pokemons.length != 0 ? (
              pokemonArray.length === 0 ? (
                <div className="flex justify-center w-screen mt-24 h-screen">
                  <div className=" h-64">
                    <h1 className="text-3xl text-center mb-11 mr-20 font-bold text-gray-800 leading-tight">
                      Wrong Pokemon's name
                    </h1>

                    <img className="h-72 ml-16" src={ash} alt="" />
                  </div>
                </div>
              ) : (
                pokemonArray.map((pokemon, index) => {
                  const { name, url } = pokemon;
                  let pokeImg = url.split("")[url.length - 2];
                  let pokeImg2 = url.split("")[url.length - 3];
                  if (pokeImg2 == "/") {
                    pokeImg2 = "";
                  }
                  const pokeImgFinal = pokeImg2 + pokeImg;

                  return (
                    <>
                      <div
                        className="bg-white  bg-opacity-60 border-blue-400 border-2 w-56 h-64 rounded-lg"
                        key={index}
                      >
                        <img
                          className="h-[11rem]"
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeImgFinal}.png`}
                          alt="Pokemons"
                        />
                        <p className="text-center font-semibold text-2xl">{name}</p>
                      </div>
                    </>
                  );
                })
              )
            ) : (
              <div className="flex justify-center w-screen mt-24 h-screen">
                <div className=" h-64">
                  <h1 className="text-3xl text-center mb-11 mr-20 font-bold text-gray-800 leading-tight">
                    Loading Pokemons Hang Tight !
                  </h1>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
