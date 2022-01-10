import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	EmployeeWrapper,
	ListHeader,
	ListItem,
	List,
	P,
	Headers,
} from '../styles/employees';
import {
	NavWrapper,
	LogoWrapper,
	LogoText,
	Btn,
	Text,
	Title,
	BodyWrapper,
	Body,
	SearchWrapper,
	SearchInput,
	Button
} from '../styles/dashboard';
import SearchIcon from '../img/searchIcon';
import LogoSVG from '../img/logo';
import Out from '../img/out';
import { setEmployees } from '../redux/slice';
import { getEmployees } from '../api/fetch';

interface Props {
	perPage: number,
	currentPage: number,
	totalRecords: number,
	employees: Array<Object>
}

function Employees() {
	const dispatch = useDispatch();
	const store = useSelector((state: any) => state.store);
	const fetchedData = useSelector((state: any) => state.store.fetchedEmployees);
	const token = store.fetchedData.token;

	  const [tableRange, setTableRange] = useState([]);
		const [slice, setSlice] = useState([]);

	useEffect(()=>{
			getEmployees(token)
				.then((res: any) => dispatch(setEmployees(res)))
				.catch((error: Error) => {
					console.log(error);
					return <h1>Error...</h1>
				});
	},[])

		const calculateRange = (employees: any, perPage: number) => {
			const range = [];
			const num = Math.ceil(employees.length / perPage);
			let i = 1;
			for (let i = 1; i <= num; i++) {
				range.push(i);
			}
			return range;
		};

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
					<Title>Funcionários</Title>
					<ListHeader>
						<P>Listagem de funcionários da Empresa</P>
						<P>{() => fetchedData.currentPage}</P>
						<P>{() => fetchedData.perPage}</P>
						<P>{() => fetchedData.totalRecords}</P>

						{/* <PaginationStuff /> */}

						<SearchWrapper>
							<SearchInput />
							<Button type="submit">
								<SearchIcon />
							</Button>
						</SearchWrapper>
					</ListHeader>
					<Headers>
						<P>Nome</P>
						<P>Email</P>
						<P>CPF</P>
						<P>Valor</P>
						<P>BIO</P>
					</Headers>
					<List>
						{fetchedData ? (
							fetchedData.employees.map((employee: any, index: number) => {
								return (
									<ListItem key={index}>
										<P>{employee.name}</P>
										<P>{employee.email}</P>
										<P>{employee.cpf}</P>
										<P>
											{
												Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'})
													.format(employee.salary)
											}
										</P>
										<P>{employee.bio}</P>
									</ListItem>
								);
							})
						) : (
							<Title>Unauthorized access</Title>
						)}
					</List>
				</Body>
			</BodyWrapper>
		</EmployeeWrapper>
	);

}

export default Employees;