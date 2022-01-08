import { useState } from 'react';
import { useDispatch } from 'react-redux';
import userSchema from '../validations/userValidation';
import { LoginWrapper, LoginForm, LoginTitle, LoginText, FormHeader, Form, FormInput, FormLabel, CheckMark, Checkbox, Row, NoAcc, Action, Image, Button } from '../styles/login';
import userStore from '../redux/store'; 
import { setUser } from '../redux/actions';



function Login() {
	const dispatch = useDispatch();
	const [apiResponse, setApiResponse] = useState({});
	const [remember, setRemember] = useState(false);

	const handleClick = () => {
    remember ? setRemember(false) : setRemember(true);
	};

  const handleSubmit = async (e: any) => {
		e.preventDefault();

    let formData = {
			email: e.target[0].value,
			password: e.target[1].value,
			remember: remember,
		};
		
    const isValid = await userSchema.isValid(formData);

		if (isValid !== true) {
			alert('Form input invalid') 
		} else {
			try {
				fetch('https://autoluby.dev.luby.com.br/login', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(formData),
				})
					.then((response) => response.json())
					.then((json) => {
						setApiResponse(json);
						console.log(apiResponse);
						const unsubscribe = userStore.subscribe(() =>
							userStore.dispatch(setUser(formData, json))
						);
						console.log(userStore.getState());
						unsubscribe();
					});
			} catch (error) {
				alert(error);
			}
	} 
	};
	
  
  const forgotPassword = () => {

  };

	return (
		<>
			<LoginWrapper>
				<LoginForm>
					<FormHeader>
						<LoginTitle>Bem-bindo à AutoLuby</LoginTitle>
						<LoginText>Faça o login para acessar sua conta.</LoginText>
					</FormHeader>
					<Form
						onSubmit={(e) => handleSubmit(e)}
						method="POST">
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
								<Checkbox
									type="checkbox"
									id="remember"
									readOnly
									checked={remember}
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