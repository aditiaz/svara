import React, { useContext } from 'react';
import { PokemonsContext } from '../context/pokemonContext';
import { FavortiePokemonsContext } from '../context/FavoritePokemonsContext';
import ash from '../assets/pictures/ash.png';
import loveable from '../assets/icons/loveable.svg';
import lovedissable from '../assets/icons/lovedissable.svg';
import reset from '../assets/icons/restart.svg';
import { useNavigate } from 'react-router-dom';
import { Modal } from './Modal';

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
    extractNumberFromUrl,
    btn,
    setBtn,
  } = useContext(PokemonsContext);

  const { allFave, setAllFave, alies, handleAlias, modal, handleModal, handleAddToFave } =
    useContext(FavortiePokemonsContext);

  const navigate = useNavigate();

  return (
    <>
      <div className="inline-block w-screen h-full">
        <div>
          <div className="flex justify-center ">
            <nav
              className=" gap-5 border  border-b-[3px] border-[EFEFEF] flex items-center justify-center bg-gray-100  h-20
              w-full"
            >
              <div className="md:w-[15%] flex bg-gray-100 h-10 border-blue-400 border-2 rounded-full ml-6">
                <input
                  className="md:ml-[2rem] p-2 bg-gray-100 w-full rounded-full focus:outline-none "
                  value={search ? search : ''}
                  onChange={handleSearch}
                  type="text"
                  placeholder="Search by Pokemon name ..."
                />
              </div>
              <select
                value={btn}
                onChange={handleBtn}
                className="text-black bg-white hover:bg-blue-200 hover:text-blue-500 text-[10px] md:text-base rounded-full w-[70px] md:w-[7rem] p-2"
              >
                {typeNames.map((typeName, index) => (
                  <option key={index} value={index}>
                    {typeName}
                  </option>
                ))}
              </select>
              <button
                onClick={() => setBtn('All Pokes')}
                className=" transform active:scale-y-75 transition-transform text-blue-500 my-5  items-center gap-2   flex rounded-lg  py-2 justify-center "
              >
                <img className="w-[2rem]" src={reset} alt="" />
              </button>
              <button
                onClick={() => navigate('/favoritepokemons/')}
                className="text-sm md:text-2xl  transform hover:scale-95 transition-transform"
              >
                <img
                  className="h-[2rem] transform hover:scale-125 transition-transform  mr-[1rem] cursor-pointer  hover:text-[#ff0000]"
                  src={loveable}
                  alt="icon"
                />
              </button>
            </nav>
          </div>
        </div>

        <div className="flex justify-center w-screen">
          <div className="grid md:grid-cols-4 grid-cols-2 md:gap-7 md:gap-x-11 gap-y-7   md:mb-10">
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
                  const number = extractNumberFromUrl(url);

                  return (
                    <React.Fragment key={number}>
                      <Modal
                        addToFave={handleAddToFave}
                        value={alies}
                        onChange={handleAlias}
                        modal={modal}
                        handleModal={handleModal}
                      />

                      <div className="bg-white border-[1px] md:w-56 h-64 rounded-lg " key={index}>
                        <div
                          onClick={() => navigate(`/detailpokemons/${number}`)}
                          className="cursor-pointer rounded-md bg-[#e2e2e2] pt-[0.2rem] mt-[1rem] h-[11rem] mx-[1rem]"
                        >
                          <img
                            className="h-[7rem] rounded-lg mt-[1rem] mx-10 "
                            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${number}.png`}
                            alt="Pokemons"
                          />
                        </div>
                        <div className="flex justify-between h-[5rem] ">
                          <p className="text-left ml-5 h-10 mt-5 text-xl">
                            {capitalizeFirstLetter(name)}
                          </p>
                          {allFave.some(item => item.name === name) ? (
                            <img
                              onClick={() => {
                                setAllFave(allFave.filter(item => item.name !== name));
                              }}
                              className="h-[2rem] transform hover:scale-125 transition-transform mt-[1rem] mr-[1rem] cursor-pointer  hover:text-[#ff0000]"
                              src={loveable}
                              alt="icon"
                            />
                          ) : (
                            <img
                              onClick={() => {
                                handleModal(number);
                              }}
                              className="h-[2rem] transform hover:scale-125 transition-transform mt-[1rem] mr-[1rem] cursor-pointer  hover:text-[#ff0000]"
                              src={lovedissable}
                              alt="icon"
                            />
                          )}
                        </div>
                      </div>
                    </React.Fragment>
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
