import React                from 'react';
import CalculatorWaterInput from './CalculatorWaterInput'

class CalculatorWater extends React.Component {
	constructor(prors) {
		super(prors);

		this.state = {
			temperature: '',
			scale: 'c'
		}
	}

	handleCelsiusChange = (temperature) => {
		this.setState({scale: 'c', temperature})
	};

	handleFahrenheitChange = (temperature) => {
		this.setState({scale: 'f', temperature})
	};

	render() {
		const scale = this.state.scale;
		const temperature = this.state.temperature;
		const celsius = scale === 'c' ? temperature : tryConvert(temperature, toCelsius);
		const fahrenheit = scale === 'f' ? temperature : tryConvert(temperature, toFahrenheit);

		return (
			<fieldset>
				<legend>Перевод с цельсия в фарингейт и обратно</legend>

				<CalculatorWaterInput
					onTemperatureChange={this.handleCelsiusChange}
					temperature={celsius}
					scale='C'/>
				<CalculatorWaterInput
					onTemperatureChange={this.handleFahrenheitChange}
					temperature={fahrenheit}
					scale='F'/>

				<BoilingVerdict celsius={parseFloat(celsius)}/>
			</fieldset>
		)
	}
}

function BoilingVerdict(props) {
	return props.celsius >= 100 ? (<p>Вода кепит</p>) : (<p>Вода не кипир</p>);
}

function toCelsius(fahrenheit) {
	return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
	return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
	const input = parseFloat(temperature);
	if (Number.isNaN(input)) {
		return '';
	}
	const output = convert(input);
	const rounded = Math.round(output * 1000) / 1000;
	return rounded.toString();
}

export default CalculatorWater