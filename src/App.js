import React, { useEffect, useState } from 'react';
import MoviesList from './components/MoviesList';
import './App.css';
import AddMovies from './components/AddMovies';
import Movie from './components/Movie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchMoviesHandler();
  }, [])

  async function addMovieHandler(movie) {
    const response = await fetch('https://coastal-mender-327308-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-type': 'application/json'
      }
    })
    const data = await response.json();
    console.log(data);

  }

  async function fetchMoviesHandler() {
    try {
      setIsLoading(true);
      const response = await fetch('https://coastal-mender-327308-default-rtdb.firebaseio.com/movies.json');
      const data = await response.json();
      const loadedMovies =[]

      for(const key in data) {
        loadedMovies.push ( {
         id: key,
         title : data[key]. title,
         openingText : data[key]. openingText,
         releaseDate : data[key]. releaseDate
        })
      }
      

      

      setMovies(loadedMovies);
      setIsLoading(false);
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
    }
  }

  return (
    <React.Fragment>
      <AddMovies onAddMovie={addMovieHandler} />
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!isLoading && movies.length > 0 && <MoviesList movies={movies} />}
        {!isLoading && movies.length === 0 && <p>No movies available.</p>}
        {!isLoading && error && <p>Something went wrong: {error}</p>}
        {isLoading && <p>Loading...</p>}
      </section>
    </React.Fragment>
  );
}

export default App;
