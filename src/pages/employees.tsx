import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	EmployeeWrapper,
	ListHeader,
	TableHeader,
	Headers,
	BodyEmployees,
	Paragraph,
	TableData,
	Table,
	TableRow,
	NavWrapper,
	LogoWrapper,
	LogoText,
	Btn,
	Text,
	Title,
	BodyWrapper,
	SearchWrapper,
	SearchInput,
	Button,
	SubTitle,
} from '../styles/employees';
import SearchIcon from '../img/searchIcon';
import LogoSVG from '../img/logo';
import Out from '../img/out';
import { setEmployees } from '../redux/slice';
import { getEmployees } from '../api/fetch';
import { useNavigate } from 'react-router-dom';

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
	let navigate = useNavigate();

	useEffect(()=>{
			getEmployees(token)
				.then((res: any) => dispatch(setEmployees(res)))
				.catch((error: Error) => {
					console.log(error);
					return <h1>Error...</h1>
				});
	},[])

	return (
		<EmployeeWrapper>
			<NavWrapper>
				<LogoWrapper onClick={() => navigate('/')}>
					<LogoSVG />
					<LogoText onClick={() => navigate('/')}>AutoLuby</LogoText>
				</LogoWrapper>
				<Btn>
					<Text onClick={() => navigate('/')}>Sair</Text>
					<Out />
				</Btn>
			</NavWrapper>
			<BodyWrapper>
				<BodyEmployees>
					<Title>Funcionários</Title>
					<ListHeader>
						<>
							<SubTitle>Listagem de funcionários da Empresa</SubTitle>
							<Paragraph>{() => fetchedData.currentPage}</Paragraph>
							<Paragraph>{() => fetchedData.perPage}</Paragraph>
							<Paragraph>{() => fetchedData.totalRecords}</Paragraph>
						</>
						<SearchWrapper>
							<SearchInput />
							<Button type="submit">
								<SearchIcon />
							</Button>
						</SearchWrapper>
					</ListHeader>
					<Table>
						<TableRow>
							<Headers>
								<TableHeader>Nome</TableHeader>
								<TableHeader>Email</TableHeader>
								<TableHeader>CPF</TableHeader>
								<TableHeader>Valor</TableHeader>
								<TableHeader>BIO</TableHeader>
							</Headers>
						</TableRow>
						{fetchedData ? (
							fetchedData.employees.map((employee: any, index: number) => {
								return (
									<TableRow key={index}>
										<TableData>{employee.name}</TableData>
										<TableData>{employee.email}</TableData>
										<TableData>{employee.cpf}</TableData>
										<TableData>
											{Intl.NumberFormat('pt-BR', {
												style: 'currency',
												currency: 'BRL',
											}).format(employee.salary)}
										</TableData>
										<TableData>{employee.bio}</TableData>
									</TableRow>
								);
							})
						) : (
							<Title>Unauthorized access</Title>
						)}
					</Table>
				</BodyEmployees>
			</BodyWrapper>
		</EmployeeWrapper>
	);

}

export default Employees;