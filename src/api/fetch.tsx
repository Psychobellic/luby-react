import axios from 'axios';

async function getContent(passFormData: any, token: string) {

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
		Authorization: `Bearer ${token}`,
	};
	
	try {
		await axios
			.post('https://autoluby.dev.luby.com.br/login', passFormData, config)
			.then((response) => {
				console.log(response.data);
				return response.data;
			});
	} catch (error) {
		console.log(error);
	}
}

export default getContent;

