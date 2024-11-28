import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import ContainerPokedex from "./components/ContainerPokedex.jsx"
import "./index.css"
import React from "react"
import ContainerPokedexUrL from "./components/[pokemon]/pokemon.jsx"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/1" element={<ContainerPokedex />} />
          <Route path="/:pokemonIdPage" element={<ContainerPokedexUrL />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
