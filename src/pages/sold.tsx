import { useDispatch, useSelector } from 'react-redux';
import {
	SoldWrapper,
	BodySold,
	TableRow,
	ListHeader,
	TableData,
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

export default function Sold() {
	const dispatch = useDispatch();
	const store = useSelector((state: any) => state.store);
	const fetchedData = useSelector((state: any) => state.store.fetchedVehicles);
	const token = store.fetchedData.token;

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
						<Title>Todos Veículos</Title>
						<ListHeader>
							<>
								<SubTitle>Listagem geral de veículos</SubTitle>
								<Paragraph>{() => fetchedData.currentPage}</Paragraph>
								<Paragraph>{() => fetchedData.perPage}</Paragraph>
								<Paragraph>{() => fetchedData.totalRecords}</Paragraph>
							</>
							{/* <PaginationStuff /> */}

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
									<TableHeader>Marca</TableHeader>
									<TableHeader>Modelo</TableHeader>
									<TableHeader>Ano</TableHeader>
									<TableHeader>KM</TableHeader>
									<TableHeader>Cor</TableHeader>
									<TableHeader>Status</TableHeader>
									<TableHeader>Chassi</TableHeader>
									<TableHeader>Valor</TableHeader>
								</Headers>
							</TableRow>
							{fetchedData ? (
								fetchedData.vehicles.map((vehicle: any, index: number) => {
									return (
										<TableRow key={index}>
											<TableData>{vehicle.brand}</TableData>
											<TableData>{vehicle.model}</TableData>
											<TableData>{vehicle.yer}</TableData>
											<TableData>{vehicle.km}</TableData>
											<TableData>{vehicle.color}</TableData>
											<TableData>{vehicle.status}</TableData>
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
					</BodySold>
				</BodyWrapper>
			</SoldWrapper>
		</>
	);
}
