import { useEffect, useState, createContext } from 'react';
import PokemonAPI from '../utils/pokemonApi';
export const FavortiePokemonsContext = createContext(null);

export const FavortiePokemonsContextProvider = props => {
  const [alies, setAlias] = useState();
  const handleAlias = e => {
    setAlias(e.target.value);
  };

  const [id, setId] = useState();
  const [allFave, setAllFave] = useState([]);

  const [favPokemons, setFavPokemons] = useState({
    name: '',
    weight: '',
    height: '',
    type: '',
    alias: '',
    id: '',
  });

  useEffect(() => {
    if (typeof id !== 'undefined') {
      fetchFavorite(id);
      console.log(`fetchFavorite triggered with id: ${id}`);
    }
  }, [id]);

  useEffect(() => {
    setFavPokemons({
      ...favPokemons,
      alias: alies,
    });
  }, [alies]);
  const [modal, setModal] = useState(true);
  const handleModal = e => {
    setAlias('');
    setId(e);
    setModal(!modal);
  };
  const fetchFavorite = async od => {
    try {
      const response = await PokemonAPI.get(`${od}/`);
      setFavPokemons(prevFavPokemons => ({
        ...prevFavPokemons,
        name: response.data.name,
        weight: response.data.weight,
        height: response.data.height,
        type: response.data.types[0].type.name,
        id: od,
      }));
      console.log(`fetchFavorite triggered with id: ${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddToFave = () => {
    if (alies.trim() === '') {
      alert('Alias tidak boleh kosong');
    } else {
      setAllFave(prevAllFave => [...prevAllFave, { ...favPokemons, alias: alies }]);
      handleModal();
    }
  };
  return (
    <FavortiePokemonsContext.Provider
      value={{
        allFave,
        setAllFave,
        alies,
        setAlias,
        handleAlias,
        id,
        setId,
        favPokemons,
        fetchFavorite,
        modal,
        handleModal,
        handleAddToFave,
      }}
    >
      {props.children}
    </FavortiePokemonsContext.Provider>
  );
};
