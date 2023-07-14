import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { PokemonsContext } from "../context/pokemonContext";
import ash from "../assets/pictures/ash.png";
import pokeAlt from "../assets/pictures/pokeAlt.png";
import axios from "axios";
import PokemonAPI from "../utils/pokemonApi";

const Home = () => {
  const { search, handleSearch, typeNames, handleBtn, btnColor, pokemons, finalPokemons } =
    useContext(PokemonsContext);
  // let pokemonArray = Object.values(pokemons);
  // const pokemonsType = [
  //   {
  //     name: "normal",
  //     url: "https://pokeapi.co/api/v2/type/1/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "fighting",
  //     url: "https://pokeapi.co/api/v2/type/2/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "flying",
  //     url: "https://pokeapi.co/api/v2/type/3/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "poison",
  //     url: "https://pokeapi.co/api/v2/type/4/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "ground",
  //     url: "https://pokeapi.co/api/v2/type/5/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "rock",
  //     url: "https://pokeapi.co/api/v2/type/6/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "bug",
  //     url: "https://pokeapi.co/api/v2/type/7/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "ghost",
  //     url: "https://pokeapi.co/api/v2/type/8/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "steel",
  //     url: "https://pokeapi.co/api/v2/type/9/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "fire",
  //     url: "https://pokeapi.co/api/v2/type/10/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "water",
  //     url: "https://pokeapi.co/api/v2/type/11/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "grass",
  //     url: "https://pokeapi.co/api/v2/type/12/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "electric",
  //     url: "https://pokeapi.co/api/v2/type/13/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "psychic",
  //     url: "https://pokeapi.co/api/v2/type/14/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "ice",
  //     url: "https://pokeapi.co/api/v2/type/15/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "dragon",
  //     url: "https://pokeapi.co/api/v2/type/16/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "dark",
  //     url: "https://pokeapi.co/api/v2/type/17/",
  //     pokemon: [],
  //   },
  //   {
  //     name: "fairy",
  //     url: "https://pokeapi.co/api/v2/type/18/",
  //     pokemon: [],
  //   },
  // ];

  // const [search, setSearch] = useState();
  // const handleSearch = (e) => {
  //   setSearch(e.target.value);
  // };

  // const endPoints = [];
  // for (let i = 1; i <= 18; i++) {
  //   endPoints.push(`https://pokeapi.co/api/v2/type/${i}/`);
  // }
  // const [btn, setBtn] = useState();
  // const fetchPokemonType = async () => {
  //   try {
  //     const results = await Promise.all(endPoints.map((url) => PokemonAPI.get(url)));

  //     for (let i = 0; i < 18; i++) {
  //       pokemonsType[i].pokemon = results[i].data.pokemon;
  //     }
  //     setType(pokemonsType[btn].pokemon);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   fetchPokemonType();
  // }, [btn]);
  // const [type, setType] = useState([]);
  // const updatedPoke = pokemonArray.filter((pokemon) =>
  //   type.some((selected) => selected.pokemon.name == pokemon.name)
  // );
  // const [btnColor, setBtnColor] = useState();

  // const handleBtn = (i) => {
  //   setBtnColor(i);
  //   setBtn(i);
  //   setSearch(null);
  // };
  // const typeNames = [
  //   "Normal",
  //   "Fighting",
  //   "Flying",
  //   "Poison",
  //   "Ground",
  //   "Rock",
  //   "Bug",
  //   "Ghost",
  //   "Steel",
  //   "Fire",
  //   "Water",
  //   "Grass",
  //   "Electric",
  //   "Psychic",
  //   "Ice",
  //   "Dragon",
  //   "Dark",
  //   "Fairy",
  // ];
  // let finalPokemons = pokemonArray;
  // if (search) {
  //   const searchResult = pokemonArray.filter((e) => {
  //     return e.name.toLowerCase().includes(search.toLowerCase());
  //   });
  //   finalPokemons = Object.values(searchResult);
  // } else if (btn == "All Pokes") {
  //   finalPokemons = pokemonArray;
  // } else if (btn) {
  //   finalPokemons = updatedPoke;
  // }
  return (
    <>
      <div className="inline-block w-screen h-full">
        <div>
          <div className="flex justify-center ">
            <div
              className=" flex items-center justify-center bg-gray-100  h-20
             w-full"
            >
              <div className="w-[45%] flex bg-gray-100 h-10 border-blue-400 border-2 rounded-full ml-6">
                <input
                  className="ml-[1rem] bg-gray-100 w-full rounded-full focus:outline-none "
                  value={search}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search by Pokemon name ..."
                />
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => handleBtn("All Pokes")}
              className={"bg-blue-500 text-white my-5 font-bold py-2 px-4 rounded"}
            >
              Reset Pokemons
            </button>
          </div>
          <div className="w-screen h-20 mt-2 mb-14 flex justify-center items-center ">
            <div className="  h-full grid grid-cols-9  gap-5">
              {typeNames.map((e, i) => {
                return (
                  <>
                    <button
                      key={e}
                      onClick={() => handleBtn(i)}
                      className={` ${
                        btnColor == i ? "text-blue-500 bg-white" : "bg-blue-500 text-white"
                      }  hover:bg-blue-700 font-bold py-2 px-4 rounded`}
                    >
                      {e}
                    </button>
                  </>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex justify-center w-screen">
          <div className="grid grid-cols-4 gap-7 gap-x-11 gap-y-7   mb-10">
            {pokemons.length != 0 ? (
              finalPokemons.length === 0 ? (
                <div className="flex justify-center w-screen mt-24 h-screen">
                  <div className=" h-64">
                    <h1 className="text-3xl text-center mb-11 mr-20 font-bold text-gray-800 leading-tight">
                      Wrong Pokemon's name
                    </h1>

                    <img className="h-72 ml-16" src={ash} alt="" />
                  </div>
                </div>
              ) : (
                finalPokemons?.map((pokemon, index) => {
                  const { name, url } = pokemon;
                  let pokeImg = url.split("")[url.length - 2];
                  let pokeImg2 = url.split("")[url.length - 3];
                  if (pokeImg2 == "/") {
                    pokeImg2 = "";
                  }
                  const pokeImgFinal = pokeImg2 + pokeImg;

                  return (
                    <>
                      <div className="bg-white   border-2 w-56 h-64 rounded-2xl" key={index}>
                        <img
                          className="h-[11rem]"
                          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeImgFinal}.png`}
                          alt="Pokemons"
                        />
                        <p className="text-center font-semibold mt-5 text-2xl">{name}</p>
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
