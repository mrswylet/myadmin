import React  from 'react';
// import logo from './logo.svg';
import './scss/style.scss';
import Header from './components/Header'
import Menu   from './components/Menu'
import Body   from './components/Body'


class App extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className='app'>
				<Header userName={'Anton'}/>
				<Menu/>
				<Body/>
			</div>
		);
	}

}


export default App;
