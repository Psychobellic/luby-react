import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import userSchema from '../validations/userValidation';
import { LoginWrapper, LoginForm, LoginTitle, LoginText, FormHeader, Form, FormInput, FormLabel, CheckMark, Checkbox, Row, NoAcc, Action, Image, Button } from '../styles/login';
import {
	login,
	setEmail,
	setPassword,
	setRemember,
} from '../redux/slice';
import { postLogin } from '../api/fetch';

function Login() {
	const [checked, setChecked] = useState(false);
	const store = useSelector((state: any) => state.store);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const handleSubmit = async (e: any) => {
		e.preventDefault();

		let formData = {
			email: store.value.email,
			password: store.value.password,
			remember: store.value.remember || false,
		};

		const isValid = await userSchema.isValid(formData);
		if (isValid) {
			await postLogin(formData, store.value.token).then((res) =>
			dispatch(login(res))
			).then(() => {
				navigate('/dashboard')
			}).catch((error:Error)=> console.log(error))
		} else {
			alert('invalid Form input');
		}
	};

	const forgotPassword = () => {};

	const handleChange = () => {
		if(checked===true){
			setChecked(false);
			dispatch(setRemember(false));
		} else {
			setChecked(true);
			dispatch(setRemember(true));
		}
	};

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
									onChange={() => handleChange()}
								/>
								<FormLabel htmlFor="remember">
									<Action onClick={() => handleChange()}>
										Lembrar minha senha
									</Action>
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