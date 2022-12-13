import "./App.css";
import Header from "./components/Header";
import { React, useState, useEffect } from "react";
import axios from "axios";
import MovieScreen from "./components/MovieScreen";
import Watchlist from "./components/Watchlist";

function App() {
   const [movieList, setMovieList] = useState([]);
   const [watchlist, setWatchlist] = useState([]);
   const [page, setPage] = useState(1);

   function getData() {
      axios
         .get(
            `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`
         )
         .then((res) => {
            // console.log('these are the axiosGet results: ', res.data.results)
            setMovieList(res.data.results);
         });
   }
   // console.log(movieList)

   function addMovie(movie) {
      setWatchlist([...watchlist, movie]);
   }
   console.log("watchlist log: ", watchlist);

   const removeMovie = (movie) => {
      const newState = watchlist.filter((mov) => {
         return mov !== movie;
      });
      setWatchlist(newState);
   };

   useEffect(() => {
      getData();
   }, [page]);

   return (
      <div className="App">
         <Header />
         <main>
            <MovieScreen
               addMovie={addMovie}
               movieList={movieList}
               page={page}
               setPage={setPage}
               watchlist={watchlist}
               removeMovie={removeMovie}
            />
            <Watchlist watchlist={watchlist} 
               removeMovie={removeMovie}
               movieList={movieList}
            />
         </main>
      </div>
   );
}

export default App;
