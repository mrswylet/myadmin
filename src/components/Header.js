import React         from "react";
import HeaderCompany from "./HeaderCompany";
import HeaderUser    from './HeaderUser'

function Header(props) {
	const company = props.headerData.company;
	const user = props.headerData.user;
	return (
		<header className='header'>
			{Object.keys(company).length > 0 &&
			<HeaderCompany company={company}/>
			}
			{Object.keys(user).length > 0 &&
			<HeaderUser user={user}/>
			}
		</header>
	);
}

export default Header;