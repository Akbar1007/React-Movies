import { Component } from 'react'
import './MoviesAddForm.css'

class MoviesAddForm extends Component {
	// constructor(props) {
	// 	super(props)
	// 	this.state = {
	// 		name: '',
	// 		number: 0,
	// 	}
	// }

	// onAdd = e => {
	// 	const { name, number } = this.state
	// 	this.setState({ name: e.target.value })
	// 	console.log(this.name)
	// }

	render() {
		return (
			<div className='movies-add-form'>
				<h3>Add a new movie</h3>
				<form className='add-form d-flex'>
					<input
						type='text'
						className='form-control new-post-label'
						placeholder='Which movie?'
						onAdd={e => this.onAdd}
					/>
					<input
						type='number'
						className='form-control new-post-label'
						placeholder='How many times watched?'
					/>
					<button type='submit' className='btn btn-outline-dark'>
						Add
					</button>
				</form>
			</div>
		)
	}
}

export default MoviesAddForm
