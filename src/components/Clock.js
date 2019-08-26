import React from 'react'

class Clock extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			date: new Date(),
			timerId: undefined,
		}

		//this.testClick = this.testClick.bind(this);
	}

	render() {
		const date = this.state.date.toLocaleTimeString();
		return (
			<div>
				<h2>Сейчас {date}.</h2>
			</div>
		);
	}

	componentDidMount() {
		this.timerId = setInterval(() => {
			this.tick();
		}, 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timerId);
	}

	tick(){
		this.setState((state, props) => ({
			date: new Date()
		}))
	}
}

export default Clock;