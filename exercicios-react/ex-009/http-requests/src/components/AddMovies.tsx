import MovieProps from "../interfaces/MovieProps";
import classes from "./AddMovie.module.css";
import {useRef} from "react"

interface addMovieProps {
  onAddMovie: (movie: MovieProps) => void
}

const AddMovies = ({onAddMovie}:addMovieProps) => {
  const refs = {
    titleRef: useRef() as React.MutableRefObject<HTMLInputElement>,
    openingRef: useRef() as React.MutableRefObject<HTMLTextAreaElement>,
    releaseDateRef: useRef() as React.MutableRefObject<HTMLInputElement>
  }

  const SubmitHandler: React.FormEventHandler = (event) => {
    event.preventDefault()

    const movie = {
      id: Math.random(),
      title: refs.titleRef.current.value,
      openingText: refs.openingRef.current.value,
      releaseDate: refs.releaseDateRef.current.value
    }

    if (!movie.openingText || !movie.releaseDate || !movie.title) {
      return;
    }

    onAddMovie(movie)
  }

  return (
    <form onSubmit={SubmitHandler}>
      <div className={classes.control}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" ref={refs.titleRef} />
      </div>

      <div className={classes.control}>
        <label htmlFor="opening">Opening Text</label>
        <textarea name="opening" id="opening" cols={30} rows={5} ref={refs.openingRef}/>
      </div>

      <div className={classes.control}>
        <label htmlFor="release">Release Date</label>
        <input type="text" name="release" id="release" ref={refs.releaseDateRef}/>
      </div>

      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovies;
