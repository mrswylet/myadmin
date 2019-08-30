import React                       from 'react';
// import logo from './logo.svg';
import './scss/style.scss';
import Header                      from './components/Header'
import Menu                        from './components/Menu'
import Body                        from './components/Body'
import { BrowserRouter as Router } from "react-router-dom";
import callApiServer               from './callApiServer';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			app_data: {}
		}
	}

	render() {
		const main_menu = this.state.app_data.main_menu || [];
		const header = {
			company: this.state.app_data.company || {},
			user: this.state.app_data.user || {},
		};
		return (
			<div className='app'>
				<Router>
					<Header headerData={header}/>
					<Menu mainMenuData={main_menu}/>
					<Body/>
				</Router>
			</div>
		);
	}

	async componentDidMount() {
		let response = await callApiServer();
		this.setState({
			app_data: response
		});
		console.log(response);
	}
}


export default App;
