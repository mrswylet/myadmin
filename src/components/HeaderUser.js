import React             from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faAngleDown}     from '@fortawesome/free-solid-svg-icons'

class HeaderUser extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			is_dropdown_open: false
		}
	}

	render() {
		const user_data = this.props.user;
		const img = user_data.logo;
		const name = user_data.name;
		const id = user_data.id;

		const tooltips = this.state.is_dropdown_open ? 'Закрыть меню' : 'Открыть меню';
		const arrow_class = this.state.is_dropdown_open ? 'header__user-arrow header__user-arrow_open' : 'header__user-arrow';
		const dropdown_class = this.state.is_dropdown_open ? 'header__user-dropdown header__user-dropdown_open' : 'header__user-dropdown';

		return (
			<div className="header__user" title={tooltips} onClick={this.handlerDropdown}>
				<img src={img} alt={name} title={name} className="header__user-logo"/>
				<div className="header__user-info">
					<span className="header__user-name">
						{name}
						<span className={arrow_class}>
							<FontAwesomeIcon icon={faAngleDown}/>
						</span>
					</span>
					<span className="header__user-id">Ваш ID: {id}</span>
				</div>
				<div className={dropdown_class}>

				</div>
			</div>
		)
	}

	handlerDropdown = (event) => {
		this.setState((state, props) => ({
			is_dropdown_open: !state.is_dropdown_open
		}))
	}
}

export default HeaderUser;