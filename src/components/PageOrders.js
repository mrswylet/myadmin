import React from 'react';
import CalculatorWater from './CalculatorWater'

class PageOrders extends React.Component{
	constructor(props){
		super(props);
	}

	render() {
		return(
			<React.Fragment>
				<h1>Старница заказов</h1>

				<CalculatorWater/>
			</React.Fragment>
		)
	}
}

export default PageOrders;