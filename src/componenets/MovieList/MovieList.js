import './MovieList.css'

import MovieListItem from '../MovieListItem/MovieListItem'

const MovieList = ({ data }) => {
	return (
		<ul className='movie-list'>
			{data.map(item => (
				<MovieListItem {...item} />
			))}
		</ul>
	)
}

export default MovieList
