import React, {useState} from 'react';
import styled from "styled-components";
import ChryslerSVG from '../../img/chrysler_sport';
import EmployeeSVG from '../../img/employee';
import WhiteSuvSVG from '../../img/white_suv';

import Card from "../Card";

const CardsWrapper = styled.div`
  height: 40rem;
  width: 50rem;
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
				image={<WhiteSuvSVG />}
			/>
			<Card 
        title={'Listagem geral de veículos'} 
        subTitle={"Listagem de veículos de toda a empresa"} 
        amount={list} 
        image={<ChryslerSVG />} 
      />
			<Card 
        title={"Functionários da empresa"} 
        subTitle={"Listagem de todos os funcionários da empresa"} 
        amount={employees} 
        image={<EmployeeSVG />} 
      />
		</CardsWrapper>
	);

}



export default Cards 