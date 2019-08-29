import React from 'react';

/*
class CalculatorWaterInput extends React.Component {

}*/

function CalculatorWaterInput(props) {
	return (
		<label>
			<span>Введите градусы по шкале {props.scale}:</span>
			<input type="number" value={props.temperature} onChange={handleChange}/>
		</label>

	);

	function handleChange(event) {
		props.onTemperatureChange(event.target.value)
	}
}

export default CalculatorWaterInput;

