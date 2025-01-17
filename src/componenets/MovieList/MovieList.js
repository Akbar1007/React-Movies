import './MovieList.css'

import MovieListItem from '../MovieListItem/MovieListItem'

const MovieList = () => {
	return (
		<div className='movie-list'>
			Movie List:
			<MovieListItem />
			<MovieListItem />
			<MovieListItem />
		</div>
	)
}

export default MovieList
