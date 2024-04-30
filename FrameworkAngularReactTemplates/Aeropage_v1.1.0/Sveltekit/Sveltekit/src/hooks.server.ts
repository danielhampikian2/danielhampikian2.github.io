import { type Handle, redirect } from '@sveltejs/kit';
import { authenticateUser } from '$lib/utilities/auth';

export const handle: Handle = async ({ event, resolve }) => {

	event.locals.user = authenticateUser(event);

	if (!event.url.pathname.startsWith('/auth')) {
		if (!event.locals.user) {
			throw redirect(303, '/auth/login');
		}
	}

	return resolve(event);
};