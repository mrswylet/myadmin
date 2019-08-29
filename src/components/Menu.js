import React from "react";
import axios from 'axios';

class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			menu_list: []
		}
	}

	render() {
		const menu_list = this.state.menu_list;

		if (menu_list.length !== 0) {
			const listItems = menu_list.map((current_item, index, array) =>
				<MenuItem key={current_item.title} menuItem={current_item}/>
			);
			return (
				<div className='main-menu'>
					{listItems}
				</div>
			)
		} else {
			return (
				<div className='main-menu'>Загрузка данных</div>
			)
		}
	}

	async componentDidMount() {
		let response = await axios.get('/server/mainMenu.json');
		const menu_list = response.data;

		this.setState({menu_list})
	}
}

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function MenuItem(props) {
	const menu_item = props.menuItem;
	return (
		<div className="main-menu__section">
			<div className="main-menu__header">
				{menu_item.icon ? (<span className=".main-menu__icon">i</span>) : ''}
				<span className="main-menu__title">{menu_item.title}</span>
				<span className="badge badge-pill badge-success main-menu__badge">{menu_item.badge}</span>
			</div>
			<Sublist subMenuList={menu_item.submenu}/>
		</div>
	)
}

function Sublist(props) {
	const sublist = props.subMenuList;

	const listItems = sublist.map((current_item, index, array) =>
		<li className="main-menu__item" key={current_item.title}>
			<a href={current_item.href} className="main-menu__link" title={current_item.title}>{current_item.title}</a>
			<span className="badge badge-pill badge-success main-menu__badge">{current_item.badge}</span>
		</li>
	);

	return (<ul className="main-menu__sublist">{listItems}</ul>)
}

export default Menu;