import { type Actions, redirect, type RequestEvent } from '@sveltejs/kit';
import {
	demoUser,
	invalidEmailMessage,
	invalidPasswordMessage, loginSuccessMessage,
	notFoundEmailMessage, randomString, serverErrorMessage,
	validateEmail
} from '$lib/utilities/auth';


export const actions: Actions = {
	login: async ({ cookies, request }: RequestEvent) => {

		const loginFomData = await request.formData();
		const email = loginFomData.get('email')?.toString() ?? '';
		const password = loginFomData.get('password')?.toString() ?? '';

		let loginResponse = {
			email,
			error: '',
			message: ''
		};

		if (!validateEmail(email)) {
			loginResponse.error = invalidEmailMessage;
			return loginResponse;
		}

		if (email != demoUser.email) {
			loginResponse.error = notFoundEmailMessage;
			return loginResponse;
		}

		if (password != demoUser.password) {
			loginResponse.error = invalidPasswordMessage;
			return loginResponse;
		}

		const authToken = randomString(64);

		cookies.set('authToken', authToken, {
			httpOnly: true,
			maxAge: 60 * 60 * 24,
			sameSite: 'strict',
			path: '/'
		});

		loginResponse.message = loginSuccessMessage;
		throw redirect(302, '/');


	}
};