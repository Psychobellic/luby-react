import { object, string, boolean } from 'yup';

const userSchema = object({
	email: string().email().min(4).max(255).required(),
	password: string().min(4).max(18).required(),
	rememberPassword: boolean(),
});

export interface User {
	email: string;
	password: string;
	rememberPassword: boolean;
}

export default userSchema;