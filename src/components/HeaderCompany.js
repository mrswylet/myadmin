import React from "react";

function HeaderCompany(props) {
	const data = props.company;

	return (
		<div className='header__company'>
			<img src={data.logo} alt={data.name} title={data.name} className="header__company-logo"/>
			<span className="header__company-name">{data.name}</span>
		</div>
	);
}

export default HeaderCompany;