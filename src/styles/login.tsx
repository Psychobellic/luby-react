import styled from 'styled-components';

interface Props {
	remember: Boolean;
}

export const LoginWrapper = styled.div`
	display: flex;
	flex-direction: row;
	position: absolute;
	top: 0;
	overflow: hidden;
`;

export const LoginForm = styled.div`
	min-width: 50vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const Image = styled.img`
	width: 100%;
`;

export const LoginTitle = styled.h1`
	font-size: 2.375rem;
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	line-height: 120%;
	align-items: center;
`;

export const LoginText = styled.h2`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	font-size: 0.75rem;
	color: #a2a2a2;
	align-items: center;
	line-height: 120%;
	transform: translateY(-175%);
`;

export const Form = styled.form`
	width: 80%;
	display: flex;
	flex-direction: column;
`;

export const FormLabel = styled.label`
	font-family: Poppins;
	font-style: normal;
	font-weight: 600;
	line-height: 120%;
	font-size: 0.875rem;
	color: #7c7c7c;
	margin-top: 30px;
`;

export const FormInput = styled.input`
	line-height: 120%;
	border: none;
	height: 2.25rem;
	margin-top: 6px;
	font-family: Poppins;
	font-style: normal;
	font-weight: normal;
	display: flex;
	align-items: center;
	color: #a2a2a2;
	opacity: 0.6;
	font-size: 0.8125rem;
`;

/* Hide the browser's default checkbox */
export const Checkbox = styled.input`
	cursor: pointer;
	appearance: none;
`;

/* Create a custom checkbox */
export const CheckMark = styled.a<Props>`
	padding-left: 0.75rem;
	padding-right: 0.75rem;
	min-width: 0.875rem;
	min-height: 0.875rem;
	border-radius: 3px;
	margin: 10px;
	cursor: pointer;
	border: 1px solid #8b8b8b;
	background-color: ${(props) => (props.remember ? '#f54a48' : '#fff')};
	background-image: url('check.svg');
	background-repeat: no-repeat;
	background-position: center;
`;

export const NoAcc = styled.span`
	line-height: 120%;
	color: #7c7c7c;
`;

export const Button = styled.button`
	height: 2.3125rem;
	margin-top: 40px;
	margin-bottom: 40px;
	background-color: #f54a48;
	color: #fff;
	border: 0;
	border-radius: 3px;
`;

export const Action = styled.a`
	color: #f54a48;
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	line-height: 120%;
	cursor: pointer;
`;

export const Row = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	font-family: Poppins;
	font-style: normal;
	font-weight: 500;
	font-size: 0.875rem;
`;

export const FormHeader = styled.div`
	display: flex;
	flex-direction: column;
	align-items: left;
`;
