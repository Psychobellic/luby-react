import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { EmployeeWrapper, Title } from '../styles/employees';
import axios from 'axios';

export default function Employees() {
	const [result, setResult] = useState([]);
	const token = useSelector((state: any) => state.store.value.token);
	const config = {
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Bearer ' + token
}
	}
	
	const fetching = () => {
		try {axios.get('https://autoluby.dev.luby.com.br/employees', config).then((response) => {
				let res = response.data;
				setResult(res);
			}).catch((error)=> console.log(error))
	} catch (error) {
		console.log(error);
	}
	
}
	useEffect(()=>{
		fetching();
	},[])
	return <EmployeeWrapper>
		<Title>List of Employees:</Title>
		{result.map((employee) => {
			console.log(employee)
		})}
	</EmployeeWrapper>;
}
