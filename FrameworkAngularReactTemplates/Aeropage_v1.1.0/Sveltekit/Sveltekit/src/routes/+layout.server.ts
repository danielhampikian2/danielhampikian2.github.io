import { redirect } from '@sveltejs/kit'

export const load = ({ locals, url }: { locals: any, url: any }) => {

  if (!url.pathname.startsWith('/auth')) {
    if (!locals.user) {
      throw redirect(303, '/auth/login')
    }
  }

}