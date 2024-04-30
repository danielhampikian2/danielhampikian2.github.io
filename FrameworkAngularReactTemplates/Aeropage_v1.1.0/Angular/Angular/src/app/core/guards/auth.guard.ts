import { inject } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { AuthenticationService } from '../service/auth.service'

export const AuthGuard: CanActivateFn = (
  next: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authenticationService = inject(AuthenticationService)
  const router = inject(Router)

  const currentUser = authenticationService.currentUser()

  if (currentUser) {
    return true
  }
  // not logged in so redirect to login page with the return url
  return router.createUrlTree(['/auth/login'], {
    queryParams: { returnUrl: state.url },
  })
}
