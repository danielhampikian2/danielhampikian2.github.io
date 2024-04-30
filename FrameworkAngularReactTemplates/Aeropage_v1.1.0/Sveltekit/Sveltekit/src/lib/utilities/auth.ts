import type { RequestEvent } from '@sveltejs/kit';

export const demoUser = {
	name: 'Aeropage',
	email: 'user@demo.com',
	password: 'password'
};

export const serverErrorMessage = 'Something went wrong!';
export const invalidEmailMessage = 'Please provide valid email';
export const notFoundEmailMessage = 'This email does not exist';
export const invalidPasswordMessage = 'Please provide valid password';
export const loginSuccessMessage = 'Successfully logged in';


export const validateEmail = (email: string) => {
	return String(email)
		.toLowerCase()
		.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

export const randomString = (length: number = 32, chars: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ') => {
	let result = '';
	for (let i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
	return result;
};

export const authenticateUser = (event: RequestEvent) => {
	const { cookies } = event;

	const authToken = cookies.get('authToken');

	if (authToken) {
		return {
			name: demoUser.name,
			email: demoUser.email
		};
	}

	return null;

};