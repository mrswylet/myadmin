import React from 'react';

class Page404 extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return(
			<React.Fragment>
				<h1>Старница не найдена <strong>404</strong>.</h1>
			</React.Fragment>
		)
	}
}

export default Page404;