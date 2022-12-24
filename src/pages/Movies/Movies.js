import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import 'react-toastify/dist/ReactToastify.css';
import MovieSearchBox from 'components/MovieSearch/MovieSearchBox';
import { searchMovie } from 'API';
import { MovieList } from 'components/MovielList/MovieList';
import { toast } from 'react-toastify';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [moviesList, setMoviesList] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [setError] = useState(null);
  const movieName = searchParams.get('query') ?? '';
  useEffect(() => {
    if (movieName === '') {
      return;
    }
    try {
      setIsLoading(true);
      searchMovie()
        .finally(() => setIsLoading(false))
        .then(response => {
            setMoviesList(response.data.results);
            if (response.data.results.length === 0) {
          toast('There is no results');
        }
          console.log(response);
        });
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  }, [setError, movieName, query]);

  const onFind = (query) => {
      setSearchParams({ query });
    console.log(query);
    setQuery(query);
  };
  return (
    <div>
      {isLoading && <Loader />}
      <MovieSearchBox onSubmit={onFind} />
      <MovieList movies={moviesList} />
    </div>
  );
};

export default Movies;
