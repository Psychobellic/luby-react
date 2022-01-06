import {useState} from 'react';
import styled from "styled-components";

import Card from "../Card";

const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Cards = () => {
  const [reserved, setReserved] = useState('147 VEÍCULOS');
  const [list, setList] = useState('180 VEÍCULOS');
  const [employees, setEmployees] = useState('147 FUNCIONÁRIOS');

  return (
		<CardsWrapper>
			<Card
				title={'Veículos reservados e vendidos'}
				subTitle={'Veículos reservados e vendidos por você'}
				amount={reserved}
				image='/white_suv.svg'
			/>
			<Card
				title={'Listagem geral de veículos'}
				subTitle={'Listagem de veículos de toda a empresa'}
				amount={list}
				image='chrysler.svg'
			/>
			<Card
				title={'Functionários da empresa'}
				subTitle={'Listagem de todos os funcionários da empresa'}
				amount={employees}
				image='employee.svg'
			/>
		</CardsWrapper>
	);

}

export default Cards 