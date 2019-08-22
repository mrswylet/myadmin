import React from "react";

function Header(props) {
	return (
		<h1>Здравствуй, {props.userName}!</h1>
	);
}

export default Header;