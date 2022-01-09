import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userSchema from '../validations/userValidation';
import { LoginWrapper, LoginForm, LoginTitle, LoginText, FormHeader, Form, FormInput, FormLabel, CheckMark, Checkbox, Row, NoAcc, Action, Image, Button } from '../styles/login';
import {
	setUser,
	getUser,
	setEmail,
	getEmail,
	setPassword,
	getPassword,
	setRemember,
	getRemember,
	setToken,
	getToken,
	setPassFormData,
	getPassFormData,
} from '../redux/slice';
import store from '../redux/store';
import axios from 'axios';

function Login() {
	const [ checked, setChecked ] = useState(false); 
	const dispatch = useDispatch();

	const [passFormData, setPassFormData] = useState({
		email: '',
		password: '',
		remember: false,
	}); // pass form data to API request

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		let formData = {
			email: dispatch(getEmail(e)).payload,
			password: dispatch(getPassword(e)).payload,
			remember: dispatch(getRemember(e)).payload,
		};

		setPassFormData(formData);

		const axiosRequest = async () => {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
				Authorization: `Bearer ${dispatch(getToken(e))}`,
			};
			await axios
				.post('https://autoluby.dev.luby.com.br/login', passFormData, config)
				.then(({ data }) => {
					dispatch(setUser(data));
					return dispatch(getUser(data));
				})
				.catch((e) => {
					console.log(e);
				});
		};

		const isValid = await userSchema.isValid(formData);

		isValid ? axiosRequest() : alert('invalid Form input');

	};
	const forgotPassword = () => {};

	const handleClick = () => {
		if(checked){
			setChecked(false)
			dispatch(setRemember(false));
		} else {
			setChecked(true);
			dispatch(setRemember(true));
		}
	}

	return (
		<>
			<LoginWrapper>
				<LoginForm>
					<FormHeader>
						<LoginTitle>Bem-bindo à AutoLuby</LoginTitle>
						<LoginText>Faça o login para acessar sua conta.</LoginText>
					</FormHeader>
					<Form onSubmit={(e) => handleSubmit(e)} method="POST">
						<>
							<FormLabel>Endereço de email</FormLabel>
							<FormInput
								placeholder="@mail.com"
								id="email"
								onChange={(e) => dispatch(setEmail(e.target.value))}
							/>
						</>
						<>
							<FormLabel>Senha</FormLabel>
							<FormInput
								placeholder="senha"
								id="senha"
								onChange={(e) => dispatch(setPassword(e.target.value))}
							/>
						</>
						<Row>
							<FormLabel>
								<CheckMark remember={checked} />
								<Checkbox
									type="checkbox"
									id="remember"
									readOnly
									checked={checked}
									onClick={handleClick}
								/>
								<FormLabel htmlFor="remember">
									<Action onClick={handleClick}>Lembrar minha senha</Action>
								</FormLabel>
							</FormLabel>
							<FormLabel htmlFor="forgot">
								<Action id="forgot" onClick={forgotPassword}>
									Esqueceu a senha?
								</Action>
							</FormLabel>
						</Row>
						<Button type="submit">Entrar</Button>
						<div>
							<NoAcc>Ainda não tem uma conta?</NoAcc>
							<Action>Criar Conta</Action>
						</div>
					</Form>
				</LoginForm>
				<Image src="subaru.svg" />
			</LoginWrapper>
		</>
	);
}

export default Login;