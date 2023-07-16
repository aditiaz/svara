import axios from "axios";

const PokemonAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon/",
});

export default PokemonAPI;
