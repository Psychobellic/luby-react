import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
	SoldWrapper,
	BodySold,
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
} from '../styles/sold';
import SearchIcon from '../img/searchIcon';
import LogoSVG from '../img/logo';
import Out from '../img/out';
import { getVehicles } from '../api/fetch';
import { setVehicles } from '../redux/slice';

export default function Sold() {
	const dispatch = useDispatch();
	const store = useSelector((state: any) => state.store);
	const fetchedData = useSelector((state: any) => state.store.fetchedVehicles);
	const token = store.fetchedData.token;

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
			<SoldWrapper>
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
					<BodySold>
						<Title>Seus Veículos</Title>
						<ListHeader>
							<>
								<SubTitle>Listagem de veículos reservados e vendidos</SubTitle>
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
								<TableRow state={'none'}>
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
							<tbody>
								{fetchedData ? (
									fetchedData.vehicles.map((vehicle: any, index: number) => {
										return (
											<TableRow key={index} state={vehicle.status}>
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
							</tbody>
						</Table>
					</BodySold>
				</BodyWrapper>
			</SoldWrapper>
		</>
	);
}
