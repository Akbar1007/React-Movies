import './Filter.css'
const Filter = () => {
	return (
		<div className='btns-group'>
			<button className='btn btn-dark' type='button'>
				All movies
			</button>
			<button className='btn btn-outline-dark' type='button'>
				Popular movies
			</button>
			<button className='btn btn-outline-dark' type='button'>
				Most watched movies
			</button>
		</div>
	)
}

export default Filter
