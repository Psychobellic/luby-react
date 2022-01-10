import axios, { AxiosResponse } from 'axios';

export async function postLogin(passFormData: any, token: string) {
	const config = {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`,
		},
	};
	var result;

	try {
		await axios
			.post('https://autoluby.dev.luby.com.br/login', passFormData, config)
			.then((response: AxiosResponse) => {
				result = response.data;
			})
			.catch((error: Error) => console.log(error));
	} catch (error) {
		console.log(error);
	}
	return result;
}

export async function getEmployees(token: string) {
	const config = {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${token}`,
		},
	};
	var result;

	try {
		await axios
			.get('https://autoluby.dev.luby.com.br/employees', config)
			.then((response: AxiosResponse) => {
				result = response.data;
			})
			.catch((error: Error) => console.log(error));
	} catch (error) {
		console.log(error);
	}
	return result;
}
