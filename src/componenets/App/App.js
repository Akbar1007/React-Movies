import React from 'react'
import '../App/App.css'
import Filter from '../Filter/Filter'
import Info from '../Info/Info'
import MovieList from '../MovieList/MovieList'
import SearchPanel from '../Search-Panel/SearchPanel'

export const App = () => {
	return (
		<div className='app font-monospace'>
			<div className='content'>
				<Info />
				<div className='search-panel'>
					<SearchPanel />
					<Filter />
				</div>
				<MovieList />
			</div>
		</div>
	)
}

export default App
