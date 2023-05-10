import MoviesList from "./components/MoviesList";
import MovieProps from "./interfaces/MovieProps";
import AddMovies from "./components/AddMovies";
import Loading from "./components/Loading";
import { useState, useEffect, useCallback } from "react";
import axios, { AxiosError } from "axios";
import "./App.css";

interface RequestedMoviesObject {
  data: MovieProps;
}

function App() {
  const apiUrl = "https://max-http-requests-default-rtdb.firebaseio.com/movies.json";
  const [movies, setMovies] = useState<MovieProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>();

  async function addMovieHandler(movie: MovieProps) {
    setMovies((prevMovies) => [movie, ...prevMovies]);

    await axios.post(apiUrl, movie);
  }

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setErrorMessage(null);

    try {
      const requestedMovies = await axios.get(apiUrl);
      const requestedMoviesDataObject: RequestedMoviesObject = requestedMovies.data;

      let requestedMoviesData: MovieProps[] = [];

      for (const movie of Object.values(requestedMoviesDataObject)) {
        requestedMoviesData.push(movie);
      }

      console.log(requestedMoviesData);

      setMovies(() => requestedMoviesData);
    } catch (err: unknown) {
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
        <AddMovies onAddMovie={addMovieHandler} />
      </section>

      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{sectionContent}</section>
    </>
  );
}

export default App;
