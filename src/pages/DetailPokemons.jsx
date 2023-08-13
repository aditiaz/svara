import React, { useEffect, useState, useContext } from 'react';
import { PokemonsContext } from '../context/pokemonContext';
import PokemonAPI from '../utils/pokemonApi';
import { useNavigate, useParams } from 'react-router-dom';

const DetailPokemons = () => {
  const { capitalizeFirstLetter } = useContext(PokemonsContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const [detailPokemon, setDetailPokemon] = useState({
    name: '',
    weight: '',
    height: '',
    type: '',
  });
  useEffect(() => {
    fetchDetail();
  }, []);
  const fetchDetail = async () => {
    try {
      const response = await PokemonAPI.get(`${id}/`);

      setDetailPokemon({
        name: response.data.name,
        weight: response.data.weight,
        height: response.data.height,
        type: response.data.types[0].type.name,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex  justify-center items-center h-screen w-screen">
        <button
          onClick={() => navigate('/')}
          className="text-xl absolute top-2 left-2 md:text-2xl border border-black border-b-2 ml-5 px-3 transform hover:scale-95 transition-transform"
        >
          Back Home
        </button>
        <div className="h-[30rem] w-[30rem] rounded-lg bg-white flex justify-center items-center">
          <div className="w-full  h-full ">
            <div
              onClick={() => navigate(`/detailpokemons/${pokeImgFinal}`)}
              className=" rounded-lg pt-[3rem] bg-[#e2e2e2] h-[20rem] mt-[1rem]  mx-[1rem]"
            >
              <img
                className="w-[20rem]  h-52 mx-[19%]"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`}
                alt="Detail Pokemon"
              />
            </div>

            <div className="flex text-2xl text-black mt-[3rem] space-x-5">
              <div className="h-16 ml-5 text-start w-[50%] flex flex-col justify-center items-center">
                <p className="text-start w-full  font-semibold text-lg mb-2">
                  Name: {capitalizeFirstLetter(detailPokemon.name)}
                </p>
                <p className="text-start w-full   font-semibold text-lg">
                  Type: {capitalizeFirstLetter(detailPokemon.type)}
                </p>
              </div>
              <div className="h-16   w-[50%] flex flex-col justify-center items-center">
                <p className="text-start w-full font-semibold text-lg mb-2">
                  Weight: {detailPokemon.weight}
                </p>
                <p className="text-start w-full font-semibold text-lg">
                  Height: {detailPokemon.height}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailPokemons;
