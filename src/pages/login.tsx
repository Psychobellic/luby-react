import React, { useState } from 'react';
import userSchema from '../validations/userValidation';
import { InferType } from 'yup';

import { LoginWrapper, LoginForm, LoginTitle, LoginText, FormHeader, Form, FormInput, FormLabel, CheckMark, Checkbox, Row, NoAcc, Action, Image, Button } from '../styles/login'; 


function Login() {
	const [remember, setRemember] = useState(false);
	const handleClick = () => {
		setRemember(!remember);
	};

  const forgotPassword = () => {
    
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
	};

	return (
		<>
			<LoginWrapper>
				<LoginForm>
					<FormHeader>
						<LoginTitle>Bem-bindo à AutoLuby</LoginTitle>
						<LoginText>Faça o login para acessar sua conta.</LoginText>
					</FormHeader>
					<Form onSubmit={(e) => handleSubmit(e)}>
						<>
							<FormLabel>Endereço de email</FormLabel>
							<FormInput placeholder="@mail.com" id="email" />
						</>
						<>
							<FormLabel>Senha</FormLabel>
							<FormInput placeholder="senha" id="senha" />
						</>
						<Row>
							<FormLabel>
								<CheckMark onClick={handleClick} remember={remember} />
								<Checkbox type="checkbox" id="remember" checked={remember} />
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
							<NoAcc>Ainda não tem uma conta?</NoAcc>{' '}
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