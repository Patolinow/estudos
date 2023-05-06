import MoviesList from "./components/MoviesList";
import MovieProps from "./interfaces/MovieProps";
import Loading from "./components/Loading";
import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError } from "axios";
import "./App.css";

interface MovieRequestResultProps {
  title: string;
  episode_id: number;
  opening_crawl: string;
  release_date: string;
}

interface RequestedMovieProps {
  data: {
    results: MovieRequestResultProps[];
  };
}

function App() {
  const [movies, setMovies] = useState<MovieProps[]>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null)
    const apiUrl = "https://swapi.dev/api/films";

    try {
      const requestedMovies: RequestedMovieProps = await axios.get(apiUrl);
      const requestedMoviesData = requestedMovies.data.results;
      const convertedMovies: MovieProps[] = requestedMoviesData.map((movieData) => {
        return {
          title: movieData.title,
          id: movieData.episode_id,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });

      setMovies(() => convertedMovies);
    }
    
    catch (err: unknown) {
      setIsLoading(false);

      const error = err as AxiosError;
      if (axios.isAxiosError(error)) {
        setErrorMessage(error.message);
      }
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  const dummyMovies = [
    {
      id: 1,
      title: "Some Dummy Movie",
      openingText: "This is the opening text of the movie",
      releaseDate: "2021-05-18",
    },
    {
      id: 2,
      title: "Some Dummy Movie 2",
      openingText: "This is the second opening text of the movie",
      releaseDate: "2021-05-19",
    },
  ];

  let sectionContent = <MoviesList movies={movies || dummyMovies} />;

  if (isLoading) {
    sectionContent = <Loading />;
  }

  if (errorMessage) {
    sectionContent = <p>{errorMessage}</p>;
  }

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{sectionContent}</section>
    </>
  );
}

export default App;
