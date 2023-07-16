import React from "react";
import { useNavigate } from "react-router-dom";

const FavoritePokemons = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex justify-center w-screen">
        <nav
          className=" flex items-center justify-center bg-gray-100  h-20
             w-full"
        >
          {/* <div className="w-[45%] flex bg-gray-100 h-10 border-blue-400 border-2 rounded-full ml-6"></div> */}
          <h2 className="text-2xl border border-black border-b-2 ml-5 px-3">
            These are your favorites Pokemons
          </h2>
          <button
            onClick={() => navigate("/")}
            className="text-2xl border border-black border-b-2 ml-5 px-3 transform hover:scale-95 transition-transform"
          >
            Back Home
          </button>
        </nav>
      </div>

      <div className="flex justify-center w-screen mt-6">
        <div className="grid grid-cols-4 gap-7 gap-x-11 gap-y-7   mb-10">
          <div className="bg-white   border-2 w-56 h-64 rounded-2xl cursor-pointer">
            <img
              className="h-[7rem] mt-3 mx-12"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`}
              alt="Pokemons"
            />
            <p className="text-center mt-7 font-semibold mt-5 text-2xl">name</p>
            <div className="h-[10px]  my-2">
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
            </div>
          </div>
          <div className="bg-white   border-2 w-56 h-64 rounded-2xl cursor-pointer">
            <img
              className="h-[7rem] mt-3 mx-12"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`}
              alt="Pokemons"
            />
            <p className="text-center mt-7 font-semibold mt-5 text-2xl">name</p>
            <div className="h-[10px]  my-2">
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
            </div>
          </div>
          <div className="bg-white   border-2 w-56 h-64 rounded-2xl cursor-pointer">
            <img
              className="h-[7rem] mt-3 mx-12"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`}
              alt="Pokemons"
            />
            <p className="text-center mt-7 font-semibold mt-5 text-2xl">name</p>
            <div className="h-[10px]  my-2">
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
            </div>
          </div>
          <div className="bg-white   border-2 w-56 h-64 rounded-2xl cursor-pointer">
            <img
              className="h-[7rem] mt-3 mx-12"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`}
              alt="Pokemons"
            />
            <p className="text-center mt-7 font-semibold mt-5 text-2xl">name</p>
            <div className="h-[10px]  my-2">
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
            </div>
          </div>
          <div className="bg-white   border-2 w-56 h-64 rounded-2xl cursor-pointer">
            <img
              className="h-[7rem] mt-3 mx-12"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`}
              alt="Pokemons"
            />
            <p className="text-center mt-7 font-semibold mt-5 text-2xl">name</p>
            <div className="h-[10px]  my-2">
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
            </div>
          </div>
          <div className="bg-white   border-2 w-56 h-64 rounded-2xl cursor-pointer">
            <img
              className="h-[7rem] mt-3 mx-12"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`}
              alt="Pokemons"
            />
            <p className="text-center mt-7 font-semibold mt-5 text-2xl">name</p>
            <div className="h-[10px]  my-2">
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
            </div>
          </div>
          <div className="bg-white   border-2 w-56 h-64 rounded-2xl cursor-pointer">
            <img
              className="h-[7rem] mt-3 mx-12"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`}
              alt="Pokemons"
            />
            <p className="text-center mt-7 font-semibold mt-5 text-2xl">name</p>
            <div className="h-[10px]  my-2">
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
            </div>
          </div>
          <div className="bg-white   border-2 w-56 h-64 rounded-2xl cursor-pointer">
            <img
              className="h-[7rem] mt-3 mx-12"
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png`}
              alt="Pokemons"
            />
            <p className="text-center mt-7 font-semibold mt-5 text-2xl">name</p>
            <div className="h-[10px]  my-2">
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
              <div className="flex justify-around">
                <p className="text-center font-semibold  ">name</p>
                <p className="text-center font-semibold  ">name</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoritePokemons;
