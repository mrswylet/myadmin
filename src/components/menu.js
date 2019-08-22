import React from "react";

function Menu(props) {
	const menuList = props.menuList;

	const menuKeys = Object.keys(menuList);

	const listItems = menuKeys.map((menuKey) =>
		<MenuItem itemKey={menuKey} itemList={menuList[menuKey]}/>
	);

	return listItems
}

/**
 *
 * @param props
 * @returns {*}
 * @constructor
 */
function MenuItem(props) {
	const key = props.itemKey;
	const list = props.itemList;
	return (
		<div className='menu__item'>
			<div className="menu__title">{key}</div>
			<SubMenu subMenuList={list}/>
		</div>
	)
}

function SubMenu(props) {
	const sublist = props.subMenuList;

	const listItems = sublist.map((item) =>
		<li>{item}</li>
	);

	return (<ul>{listItems}</ul>)
}

export default Menu;