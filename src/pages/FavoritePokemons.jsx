import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FavortiePokemonsContext } from "../context/FavoritePokemonsContext";
import { PokemonsContext } from "../context/pokemonContext";
import del from "../assets/icons/delete.svg";
const FavoritePokemons = () => {
  const { allFave, setAllFave } = useContext(FavortiePokemonsContext);
  const { capitalizeFirstLetter } = useContext(PokemonsContext);
  const navigate = useNavigate();
  return (
    <>
      <nav className="flex justify-center w-screen">
        <div
          className=" flex items-center justify-center bg-gray-100  h-20
             w-full"
        >
          <h2 className="text-2xl border border-black border-b-2 ml-5 px-3">
            These are your favorites Pokemons
          </h2>
          <button
            onClick={() => navigate("/")}
            className="text-2xl border border-black border-b-2 ml-5 px-3 transform hover:scale-95 transition-transform"
          >
            Back Home
          </button>
        </div>
      </nav>

      <div className="flex justify-center w-screen mt-6">
        <div className="grid grid-cols-4 gap-7 gap-x-11 gap-y-7   mb-10">
          {allFave.map((e) => {
            return (
              <div className="bg-white   border-2 w-[15rem] h-[17rem] rounded-2xl">
                <div className="flex justify-end">
                  <img
                    onClick={() => {
                      setAllFave(allFave.filter((item) => item.name !== e.name));
                    }}
                    className="h-[2rem] transform hover:scale-125 transition-transform mt-[1rem] mr-[1rem] cursor-pointer  hover:text-[#ff0000]"
                    src={del}
                    alt="icon"
                  />
                </div>

                <img
                  className="h-[5rem] w-[5rem] mt-3 mx-[5rem]"
                  // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${e.id}.gif`}
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iv/platinum/${e.id}.png`}
                  alt="Pokemons"
                />
                <p className="text-center mt-7 font-semibold mt-5 text-2xl">{e.alias}</p>
                <div className="h-[10px]  my-2">
                  <div className="flex justify-around  text-center font-light">
                    <p>Name : {capitalizeFirstLetter(e.name)}</p>
                    <p>Type : {capitalizeFirstLetter(e.type)}</p>
                  </div>
                  <div className="flex justify-around  text-center font-light">
                    <p>Weight : {e.weight}</p>
                    <p>Height : {e.height}</p>
                  </div>
                  {/* <img
                    onClick={() => {
                      setAllFave(allFave.filter((item) => item.name !== e.name));
                    }}
                    className="h-[2rem] transform hover:scale-125 transition-transform mt-[1rem] mr-[1rem] cursor-pointer  hover:text-[#ff0000]"
                    src={loveable}
                    alt="icon"
                  /> */}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default FavoritePokemons;
