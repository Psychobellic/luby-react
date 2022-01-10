import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { EmployeeWrapper, ListHeader, ListItem, List } from '../styles/employees';
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
import { setEmployees } from '../redux/slice';
import { getEmployees } from '../api/fetch';


function Employees() {
	const dispatch = useDispatch();
	const store = useSelector((state: any) => state.store);
	const fetchedData = useSelector((state: any) => state.store.fetchedEmployees);

	useEffect(()=>{
			getEmployees(store.value.fetchedData.data.token)
				.then((res) => dispatch(setEmployees(res)))
				.catch((error: Error) => console.log(error));
	},[])


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
					<List>
					
					</List>
				</Body>
			</BodyWrapper>
		</EmployeeWrapper>
	);

}

export default Employees;