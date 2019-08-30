import React             from "react";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSyncAlt}       from '@fortawesome/free-solid-svg-icons'

class Icons extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			icon: '',
		}
	}

	render() {
		const icon = this.state.icon;
		if (icon) {
			// return (<FontAwesomeIcon icon={icon}/>)
			return (<svg className="main-menu__icon svg-inline--fa"
									 aria-hidden="true" focusable="false" data-prefix="fas" data-icon="wallet"
									 role="img" xmlns="http://www.w3.org/2000/svg"
									 viewBox="0 0 512 512">
				<path fill="currentColor" d={icon}/>
			</svg>)
		} else {
			return (<FontAwesomeIcon className="main-menu__icon" icon={faSyncAlt} spin/>)
		}
	}

	async componentDidMount() {
		let response = await import(`@fortawesome/free-solid-svg-icons/${this.props.icon}`);
		this.setState({icon: response['svgPathData']});
	}
}

export default Icons;