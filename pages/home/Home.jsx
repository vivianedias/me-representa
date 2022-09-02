import React from "react"
import AjudeEleitores from "./sections/AjudeEleitores/AjudeEleitores"
import Conheca from "./sections/Conheca/Conheca"
import FacaParte from "./sections/FacaParte/FacaParte"
import Pautas from "./sections/Pautas/Pautas"


const Home = () => {
  return (
    <main>
      <AjudeEleitores />
      <Conheca />
      <Pautas />
      <FacaParte />
    </main>
  )
}

export default Home
