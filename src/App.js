import React  from 'react';
// import logo from './logo.svg';
import './scss/style.scss';
import Header from './components/Header'
import Menu   from './components/Menu'
import Body   from './components/Body'
import { BrowserRouter as Router } from "react-router-dom";

class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='app'>
				<Router>
					<Header userName={'Anton'}/>
					<Menu/>
					<Body/>
				</Router>
			</div>
		);
	}

}


export default App;
