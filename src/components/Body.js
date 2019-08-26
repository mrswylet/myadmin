import React from "react";
import Clock  from './Clock'

class Body extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			countClock: 1
		}
	}

	render() {
		const counter = this.state.countClock;
		let arr_clock =[];

		for(let i = 0; i < counter; i++){
			arr_clock.push(<Clock key={i}/>);
		}

		return (
			<div className="body">
				<h1>Я тело</h1>
				{arr_clock}
				<button onClick={this.addClock.bind(this)}>Добачить часы</button>
			</div>
		);
	}

	addClock() {
		this.setState((state, props) => ({
			countClock: ++state.countClock
		}));
	}
}

export default Body;