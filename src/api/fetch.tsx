import axios from 'axios';

async function getContent(passFormData: any, token: string) {

	const config = {
		headers: {
			'Content-Type': 'application/json',
		},
		Authorization: `Bearer ${token}`,
	}
	var result;
	
	try {
		await axios
			.post('https://autoluby.dev.luby.com.br/login', passFormData, config)
			.then((response) => {
				result = response.data
			}).catch((error)=> console.log(error))
	} catch (error) {
		console.log(error);
	}
	return result;
}

export default getContent;

