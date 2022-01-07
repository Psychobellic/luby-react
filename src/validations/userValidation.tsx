import { object, string, boolean } from 'yup';

const userSchema = object({
	email: string().email().required(),
	password: string().required(),
	rememberPassword: boolean(),
});

export interface User {
	email: string;
	password: string;
	rememberPassword: Boolean;
}

export default userSchema;