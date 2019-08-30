import React  from "react";
import Icons  from "./Icons";
import {NavLink} from "react-router-dom";


class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			menu_list: []
		}
	}

	render() {
		const menu_list = this.props.mainMenuData;

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
				{menu_item.icon ? (<Icons icon={menu_item.icon}/>) : ''}
				<span className="main-menu__title">{menu_item.title}</span>
				<span className="badge badge-pill badge-success main-menu__badge">{menu_item.badge}</span>
			</div>
			<Sublist subMenuList={menu_item.submenu}/>
		</div>
	)
}

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function Sublist(props) {
	const sublist = props.subMenuList;

	const listItems = sublist.map((current_item, index, array) =>
		<li className="main-menu__item" key={current_item.title}>
			<NavLink to={current_item.href} className="main-menu__link" activeClassName="main-menu__link_active" title={current_item.title}>
				{current_item.title}
				<span className="badge badge-pill badge-success main-menu__badge">{current_item.badge}</span>
			</NavLink>
		</li>
	);

	return (<ul className="main-menu__sublist">{listItems}</ul>)
}

export default Menu;