import { Route } from '@angular/router'
import { ForgotPasswordComponent } from './forgot-password.component'
import { ResetPasswordComponent } from './reset-password.component'
import { LogoutComponent } from './logout.component'
import { SignupComponent } from './signup.component'
import { SigninComponent } from './signin.component'

export const AUTH_ROUTES: Route[] = [
  {
    path: 'auth/recoverpw',
    loadComponent: () =>
      import('../auth/forgot-password.component').then(
        (mod) => mod.ForgotPasswordComponent
      ),
    data: { title: 'Recover Password' },
  },
  {
    path: 'auth/resetpassword',
    loadComponent: () =>
      import('../auth/reset-password.component').then(
        (mod) => mod.ResetPasswordComponent
      ),
    data: { title: 'Reset Password' },
  },
  {
    path: 'auth/logout',
    loadComponent: () =>
      import('../auth/logout.component').then((mod) => mod.LogoutComponent),
    data: { title: 'Logout' },
  },
  {
    path: 'auth/register',
    loadComponent: () =>
      import('../auth/signup.component').then((mod) => mod.SignupComponent),
    data: { title: 'Register' },
  },
  {
    path: 'auth/login',
    loadComponent: () =>
      import('../auth/signin.component').then((mod) => mod.SigninComponent),
    data: { title: 'SignIn' },
  },
]
