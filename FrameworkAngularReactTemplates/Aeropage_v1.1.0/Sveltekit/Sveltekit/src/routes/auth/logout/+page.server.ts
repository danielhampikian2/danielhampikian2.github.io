export const load = ({ locals, cookies }: { locals: any, cookies: any }) => {
  if (locals.user) {
    locals.user = null
    cookies.delete('authToken', {
      path: '/'
    })
  }
}