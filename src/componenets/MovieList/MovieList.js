import './MovieList.css'

import MovieListItem from '../MovieListItem/MovieListItem'

const MovieList = () => {
	return (
		<div className='movie-list'>
			Movie List:
			<MovieListItem name={'Home Alone'} viewers={576} />
			<MovieListItem name={'Home Alone 2'} viewers={235} />
			<MovieListItem name={'Spider Man'} viewers={450} />
		</div>
	)
}

export default MovieList
