import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	VehiclesWrapper,
	BodyVehicles,
	TableRow,
	ListHeader,
	TableData,
	TableDataStyled,
	Paragraph,
	TableHeader,
	Headers,
	Table,
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
} from '../styles/vehicles';
import SearchIcon from '../img/searchIcon';
import LogoSVG from '../img/logo';
import Out from '../img/out';
import { getVehicles } from '../api/fetch';
import { setVehicles } from '../redux/slice';
import { useNavigate } from 'react-router';

function Vehicles() {
	const dispatch = useDispatch();
	const store = useSelector((state: any) => state.store);
	const fetchedData = useSelector((state: any) => state.store.fetchedVehicles);
	const token = store.fetchedData.token;
	let navigate = useNavigate();

	useEffect(() => {
		getVehicles(token)
			.then((res: any) => dispatch(setVehicles(res)))
			.catch((error: Error) => {
				console.log(error);
				return <h1>Error...</h1>;
			});
	}, []);

	return (
		<>
			<VehiclesWrapper>
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
					<BodyVehicles>
						<Title>Todos Veículos</Title>
						<ListHeader>
							<>
								<SubTitle>Listagem geral de veículos</SubTitle>
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
							<Headers>
								<TableRow>
									<TableHeader>Marca</TableHeader>
									<TableHeader>Modelo</TableHeader>
									<TableHeader>Ano</TableHeader>
									<TableHeader>KM</TableHeader>
									<TableHeader>Cor</TableHeader>
									<TableHeader>Status</TableHeader>
									<TableHeader>Chassi</TableHeader>
									<TableHeader>Valor</TableHeader>
								</TableRow>
							</Headers>
							{fetchedData ? (
								fetchedData.vehicles.map((vehicle: any, index: number) => {
									return (
										<TableRow key={index}>
											<TableData>{vehicle.brand}</TableData>
											<TableData>{vehicle.model}</TableData>
											<TableData>{vehicle.yer}</TableData>
											<TableData>{vehicle.km}</TableData>
											<TableData>{vehicle.color}</TableData>
											<TableDataStyled state={vehicle.status}>
												{vehicle.status}
											</TableDataStyled>
											<TableData>{vehicle.chassi}</TableData>
											<TableData>
												{Intl.NumberFormat('pt-BR', {
													style: 'currency',
													currency: 'BRL',
												}).format(vehicle.value)}
											</TableData>
										</TableRow>
									);
								})
							) : (
								<Title>Unauthorized access</Title>
							)}
						</Table>
					</BodyVehicles>
				</BodyWrapper>
			</VehiclesWrapper>
		</>
	);
}


export default Vehicles;