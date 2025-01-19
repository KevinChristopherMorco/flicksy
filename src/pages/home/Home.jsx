import React, { useState } from "react";
import Hero from "../../components/home/Hero";
import Trending from "../../components/home/Trending";
import Reasons from "../../components/home/Reasons";
import FAQ from "../../components/home/FAQ";
import MovieModal from "../../components/home/modal/MovieModal";

const Home = () => {
  const [modalState, setModalState] = useState({
    isOpen: false,
    modalData: null,
  });

  const { isOpen } = modalState;
  return (
    <>
      <Hero />
      <Trending setModalState={setModalState} />
      <Reasons />
      <FAQ />
      {isOpen && (
        <MovieModal modalState={modalState} setModalState={setModalState} />
      )}
    </>
  );
};

export default Home;
