import Movie from './Movie';
import classes from './MoviesList.module.css';
import MovieProps from '../interfaces/MovieProps';

interface MovieListProps {
  movies: MovieProps[]
}

const MovieList = (props:MovieListProps) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
          releaseDate={movie.releaseDate}
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
