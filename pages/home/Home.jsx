import React from "react"
import AjudeEleitores from "./sections/AjudeEleitores/AjudeEleitores"
import Conheca from "./sections/Conheca/Conheca"
import Pautas from "./sections/Pautas/Pautas"


const Home = () => {
  return (
    <main>
      <AjudeEleitores />
      <Conheca />
      <Pautas />
    </main>
  )
}

export default Home
