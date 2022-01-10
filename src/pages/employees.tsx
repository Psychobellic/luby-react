import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { EmployeeWrapper, ListHeader } from '../styles/employees';
import {
	NavWrapper,
	LogoWrapper,
	LogoText,
	Btn,
	Text,
	BodyWrapper,
	Body,
	Greeting,
	Menu,
	SearchWrapper,
	SearchInput,
	Button
} from '../styles/dashboard';
import SearchIcon from '../img/searchIcon';
import LogoSVG from '../img/logo';
import Out from '../img/out';
import axios from 'axios';

export default function Employees() {
	const [result, setResult] = useState([]);
	const token = useSelector((state: any) => state.store.value.token);
	const employeesFetch = useSelector((state: any) => state.store.fetchedEmployees);


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
				console.log(res)
			}).catch((error)=> console.log(error))
	} catch (error) {
		console.log(error);
	}
}

useEffect(() => {
	fetching();
}, []);


	return (
		<EmployeeWrapper>
			<NavWrapper>
				<LogoWrapper>
					<LogoSVG />
					<LogoText>AutoLuby</LogoText>
				</LogoWrapper>
				<Btn>
					<Text>Sair</Text>
					<Out />
				</Btn>
			</NavWrapper>
			<BodyWrapper>
				<Body>
					<Greeting>Funcionários</Greeting>
					<ListHeader>
						<Menu>Listagem de funcionários da Empresa</Menu>
						<SearchWrapper>
							<SearchInput />
							<Button type="submit">
								<SearchIcon />
							</Button>
						</SearchWrapper>
					</ListHeader>
				</Body>
			</BodyWrapper>
		</EmployeeWrapper>
	);

}