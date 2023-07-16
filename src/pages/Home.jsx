import React, { useState } from "react";
import { useContext } from "react";
import { PokemonsContext } from "../context/pokemonContext";
import ash from "../assets/pictures/ash.png";
import loveable from "../assets/icons/loveable.svg";
import lovedissable from "../assets/icons/lovedissable.svg";
import reset from "../assets/icons/restart.svg";
import PokemonAPI from "../utils/pokemonApi";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const {
    search,
    handleSearch,
    typeNames,
    handleBtn,
    btnColor,
    pokemons,
    finalPokemons,
    capitalizeFirstLetter,
  } = useContext(PokemonsContext);
  const [favoritePokemon, setFavortiePokemon] = useState({
    name: "",
    weight: "",
    height: "",
    type: "",
    alias: "",
  });
  const fetchFavorite = async (id) => {
    try {
      const response = await PokemonAPI.get(`${id}/`);

      setFavortiePokemon({
        name: response.data.name,
        weight: response.data.weight,
        height: response.data.height,
        type: response.data.types[0].type.name,
        alias: "",
      });
      console.log(favoritePokemon);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(favoritePokemon);
  // moodal
  const navigate = useNavigate();
  const [modal, setModal] = useState(true);
  const handleAddFavorite = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="inline-block w-screen h-full">
        <div>
          <div className="flex justify-center ">
            <nav
              className=" border border-b-[3px] border-[EFEFEF] flex items-center justify-center bg-gray-100  h-20
             w-full"
            >
              <div className="w-[45%] flex bg-gray-100 h-10 border-blue-400 border-2 rounded-full ml-6">
                <input
                  className="ml-[2rem]  bg-gray-100 w-full rounded-full focus:outline-none "
                  value={search}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search by Pokemon name ..."
                />
              </div>
              <button
                onClick={() => navigate("/favoritepokemons/")}
                className="text-2xl border border-black border-b-2 ml-5 px-3 transform hover:scale-95 transition-transform"
              >
                Your Favorites Pokemons
              </button>
            </nav>
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => handleBtn("All Pokes")}
              className={
                "bg-blue-200 transform active:scale-y-75 transition-transform text-blue-500 my-5 w-[8rem] items-center gap-2   flex rounded-lg  py-2 justify-center "
              }
            >
              <img className="w-[1rem]" src={reset} alt="" />
              Reset Filter
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
                        btnColor == i ? "bg-blue-500 text-white" : "text-black bg-white"
                      }  hover:bg-blue-200 hover:text-blue-500 py-2 px-4 rounded-full`}
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
                      <div
                        hidden={modal}
                        className=" fixed rounded-lg border border-[2px] border-white bg-[#EFEFEF] bg-opacity-50 w-[30rem] h-[12rem]  top-[40%] left-[40%]"
                      >
                        <div className="w-full flex justify-center font-semibold">
                          <div>
                            <p className="my-[1rem] font-extralight text-3xl text-center">
                              What you wanna call it ?
                            </p>
                            <input className="w-[15rem]  mx-10 h-[2rem]" type="text" />
                            <div className=" mt-[2rem] ">
                              <div className="flex justify-around gap-3 w-[20rem] font-light">
                                <button
                                  onClick={() => {
                                    fetchFavorite(pokeImgFinal);
                                  }}
                                  className="bg-white py-2 w-[10rem] transform hover:scale-95 transition-transform"
                                >
                                  Add to Favorite
                                </button>
                                <button
                                  onClick={handleAddFavorite}
                                  className="bg-white w-[10rem] transform hover:scale-95 transition-transform"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-white   border-[1px] w-56 h-64 rounded-lg " key={index}>
                        <div
                          onClick={() => navigate(`/detailpokemons/${pokeImgFinal}`)}
                          className="cursor-pointer rounded-md bg-[#e2e2e2] pt-[0.2rem] mt-[1rem] h-[11rem] mx-[1rem]"
                        >
                          <img
                            className="h-[7rem] rounded-lg mt-[1rem] mx-10 "
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokeImgFinal}.png`}
                            alt="Pokemons"
                          />
                        </div>
                        <div className="flex justify-between h-[5rem] ">
                          <p className="text-left ml-5 h-10 mt-5 text-xl">
                            {capitalizeFirstLetter(name)}
                          </p>
                          <img
                            onClick={handleAddFavorite}
                            className="h-[2rem] transform hover:scale-125 transition-transform mt-[1rem] mr-[1rem] cursor-pointer  hover:text-[#ff0000]"
                            src={lovedissable}
                            alt="icon"
                          />
                        </div>
                      </div>
                      {/*  */}
                      {/* <div
                        hidden={modal}
                        className=" fixed rounded-lg border border-[2px] border-white bg-[#EFEFEF] bg-opacity-50 w-[30rem] h-[12rem]  top-[40%] left-[40%]"
                      >
                        <div className="w-full flex justify-center font-semibold">
                          <div>
                            <p className="my-[1rem] font-extralight text-3xl text-center">
                              What you wanna call it ?
                            </p>
                            <input className="w-[15rem]  mx-10 h-[2rem]" type="text" />
                            <div className=" mt-[2rem] ">
                              <div className="flex justify-around gap-3 w-[20rem] font-light">
                                <button
                                  onClick={() => {
                                    fetchFavorite(pokeImgFinal);
                                  }}
                                  className="bg-white py-2 w-[10rem] transform hover:scale-95 transition-transform"
                                >
                                  Add to Favorite
                                </button>
                                <button
                                  onClick={handleAddFavorite}
                                  className="bg-white w-[10rem] transform hover:scale-95 transition-transform"
                                >
                                  Cancel
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
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

      {/* <div
        hidden={modal}
        className=" fixed rounded-lg border border-[2px] border-white bg-[#EFEFEF] bg-opacity-50 w-[30rem] h-[12rem]  top-[40%] left-[40%]"
      >
        <div className="w-full flex justify-center font-semibold">
          <div>
            <p className="my-[1rem] font-extralight text-3xl text-center">
              What you wanna call it ?
            </p>
            <input className="w-[15rem]  mx-10 h-[2rem]" type="text" />
            <div className=" mt-[2rem] ">
              <div className="flex justify-around gap-3 w-[20rem] font-light">
                <button
                  onClick={() => {
                    fetchFavorite(pokeImgFinal);
                  }}
                  className="bg-white py-2 w-[10rem] transform hover:scale-95 transition-transform"
                >
                  Add to Favorite
                </button>
                <button
                  onClick={handleAddFavorite}
                  className="bg-white w-[10rem] transform hover:scale-95 transition-transform"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Home;
