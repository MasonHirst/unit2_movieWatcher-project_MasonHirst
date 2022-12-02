import './App.css';
import Header from './components/Header';
import {React, useState, useEffect} from 'react'
import axios from 'axios';
import MovieScreen from './components/MovieScreen';



function App() {
  const [movieList, setMovieList] = useState([])
  const [watchlist, setWatchList] = useState([])
  const [page, setPage] = useState(1)
  

  function getData() {
    axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=${page}`)
      .then((res) => {
        console.log('these are the axiosGet results: ', res.data.results)
        setMovieList(res.data.results)
      })
  }
  
  useEffect(() => {
    getData()
  }, [page])


  return (
    <div className="App">
      <Header/>
      <main>
        <MovieScreen 
          movieList={movieList}
          page={page}
          setPage={setPage}
          // list={list}
        />
      </main>
    </div>
  );
}

export default App;
