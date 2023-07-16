import { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PokemonsContextProvider } from "./context/pokemonContext";
import Home from "./pages/home";
import DetailPokemons from "./pages/DetailPokemons";
import FavoritePokemons from "./pages/FavoritePokemons";
function App() {
  return (
    <>
      <PokemonsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detailpokemons/:id" element={<DetailPokemons />} />
            <Route path="/favoritepokemons/" element={<FavoritePokemons />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </PokemonsContextProvider>
    </>
  );
}

export default App;
