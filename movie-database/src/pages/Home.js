// Import Navbar, Hero, Movies, Footer Component
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Movies from "../components/Movies/Movies";
import Footer from "../components/Footer/Footer";
import AddMovieForm from "../components/AddMovieForm/AddMovieForm";
import { useState } from "react";
import data from "../utils/constants/data"; 


/**
 * Membuat Component Main.
 * Menampung Hero dan Movies
 */
function Main() {
  // Buat state movies
  const [movies, setMovies]= useState(data);

  return (
    <main>
      <Hero />
      <Movies movies = {movies} setMovies = {setMovies} />
      <AddMovieForm movies = {movies} setMovies = {setMovies} />
    </main>
  );
}

/**
 * Membuat Component Home.
 * Menampilkan Halaman Home.
 * Menampung Navbar, Main, dan Footer Component
 */
function Home() {
  return (
    <>
      <Navbar />
      <Main />
      <Footer />
    </>
  );
}

export default Home;
