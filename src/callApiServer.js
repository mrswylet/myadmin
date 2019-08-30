import axios from "axios";

async function callApiServer() {
	function getMainMenu() {
		return axios.get('/server/mainMenu.json');
	}

	function getUserInfo() {
		return axios.get('/server/accountInfo.json');
	}

	let all_response = await axios.all([getMainMenu(), getUserInfo()]);

	//console.log(response);
	let app_data = {};
	for (let response of all_response) {
		if (response.status === 200) {
			const data = response.data;
			for (let key in data) {
				if (!data.hasOwnProperty(key)) {
					continue;
				}

				app_data[key] = data[key];
			}
		}
	}
	return app_data;
}

export default callApiServer;