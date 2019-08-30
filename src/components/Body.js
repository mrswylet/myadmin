import React         from "react";
import {Route, Switch} from "react-router-dom";

import Page404     from "./Page404";
import PageOrders  from "./PageOrders";
import PageClients from "./PageClients";


class Body extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {

		return (
			<div className="body">
				<Switch>
					<Route path="/clients" exact component={PageClients}/>
					<Route path="/orders" component={PageOrders}/>
					<Route component={Page404} />
				</Switch>
			</div>
		);
	}
}

export default Body;