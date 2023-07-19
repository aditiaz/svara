import { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PokemonsContextProvider } from "./context/pokemonContext";
import { FavortiePokemonsContextProvider } from "./context/FavoritePokemonsContext";
import Home from "./pages/home";
import DetailPokemons from "./pages/DetailPokemons";
import FavoritePokemons from "./pages/FavoritePokemons";
function App() {
  return (
    <>
      <PokemonsContextProvider>
        <FavortiePokemonsContextProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/detailpokemons/:id" element={<DetailPokemons />} />
              <Route path="/favoritepokemons/" element={<FavoritePokemons />} />
              <Route />
            </Routes>
          </BrowserRouter>
        </FavortiePokemonsContextProvider>
      </PokemonsContextProvider>
    </>
  );
}

export default App;
