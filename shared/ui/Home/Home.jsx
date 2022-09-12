import React from "react";
import AjudeEleitores from "./sections/AjudeEleitores/AjudeEleitores";
import Conheca from "./sections/Conheca/Conheca";
import FacaParte from "./sections/FacaParte/FacaParte";
import Parcerias from "./sections/Parcerias/Parcerias";
import Pautas from "./sections/Pautas/Pautas";
import QuemFez from "./sections/QuemFez/QuemFez";

const Home = () => {
  return (
    <>
      <AjudeEleitores />
      <Conheca />
      <Pautas />
      <FacaParte />
      <QuemFez />
      <Parcerias />
    </>
  );
};

export default Home;
