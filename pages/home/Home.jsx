import React from "react"
import AjudeEleitores from "./sections/AjudeEleitores/AjudeEleitores"
import Conheca from "./sections/Conheca/Conheca"
import FacaParte from "./sections/FacaParte/FacaParte"
import Pautas from "./sections/Pautas/Pautas"
import QuemFez from "./sections/QuemFez/QuemFez"


const Home = () => {
  return (
    <main>
      <AjudeEleitores />
      <Conheca />
      <Pautas />
      <FacaParte />
      <QuemFez />
    </main>
  )
}

export default Home
