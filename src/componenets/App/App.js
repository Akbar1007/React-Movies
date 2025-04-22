import React from 'react'
import '../App/App.css'
import Filter from '../Filter/Filter'
import Info from '../Info/Info'
import MovieList from '../MovieList/MovieList'
import MoviesAddForm from '../MoviesAddForm/MoviesAddForm'
import SearchPanel from '../Search-Panel/SearchPanel'

export const App = () => {
	const data = [
		{
			name: 'Home alone',
			viewers: 555,
			favourite: true,
			id: 1,
		},
		{
			name: 'Home alone 2',
			viewers: 767,
			favourite: false,
			id: 2,
		},
		{
			name: 'Spider Man',
			viewers: 534,
			favourite: false,
			id: 3,
		},
	]
	return (
		<div className='app font-monospace'>
			<div className='content'>
				<Info />
				<div className='search-panel'>
					<SearchPanel />
					<Filter />
				</div>
				<MovieList data={data} />
				<MoviesAddForm />
			</div>
		</div>
	)
}

export default App
