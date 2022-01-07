import React, { useState } from 'react';
import Card from "../components/Card";
import LogoSVG from "../img/logo";
import SearchIcon from "../img/searchIcon";
import Out from "../img/out";

import { NavWrapper, LogoWrapper, LogoText, SearchWrapper, SearchInput, Button, Btn, Text, BodyWrapper, Body, Greeting, Menu, CardsWrapper } from '../styles/dashboard';

export default function Dashboard(){
	  const [reserved, setReserved] = useState('147 VEÍCULOS');
		const [list, setList] = useState('180 VEÍCULOS');
		const [employees, setEmployees] = useState('147 FUNCIONÁRIOS');


  return (
		<>
			<NavWrapper>
				<LogoWrapper>
					<LogoSVG />
					<LogoText>AutoLuby</LogoText>
				</LogoWrapper>
				;
				<SearchWrapper>
					<SearchInput />
					<Button type="submit">
						<SearchIcon />
					</Button>
				</SearchWrapper>
				<Btn>
					<Text>Sair</Text>
					<Out />
				</Btn>
			</NavWrapper>
			<BodyWrapper>
				<Body>
					<Greeting>Bem-vindo, Carlos</Greeting>
					<Menu>Menu</Menu>;
					<CardsWrapper>
						<Card
							title={'Veículos reservados e vendidos'}
							subTitle={'Veículos reservados e vendidos por você'}
							amount={reserved}
							image="/white_suv.svg"
						/>
						<Card
							title={'Listagem geral de veículos'}
							subTitle={'Listagem de veículos de toda a empresa'}
							amount={list}
							image="chrysler.svg"
						/>
						<Card
							title={'Functionários da empresa'}
							subTitle={'Listagem de todos os funcionários da empresa'}
							amount={employees}
							image="employee.svg"
						/>
					</CardsWrapper>
				</Body>
			</BodyWrapper>
		</>
	);
}