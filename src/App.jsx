import { useState } from "react";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PokemonsContextProvider } from "./context/pokemonContext";
import Home from "./pages/home";
function App() {
  return (
    <>
      <PokemonsContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route />
          </Routes>
        </BrowserRouter>
      </PokemonsContextProvider>
    </>
  );
}

export default App;
