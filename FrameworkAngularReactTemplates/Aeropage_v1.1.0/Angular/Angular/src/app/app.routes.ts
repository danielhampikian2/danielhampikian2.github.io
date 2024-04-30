import { Routes } from '@angular/router'
import { AdminLayoutComponent } from './admin-layout/admin-layout.component'
import { LayoutComponent } from './landing-layout/layout.component'
import { AuthGuard } from './core/guards/auth.guard'
import { AuthLayoutComponent } from './auth-layout/auth-layout.component'

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((mod) => mod.HomeComponent),
    data: {
      title: 'AeroPage - Tailwind CSS Multipurpose One Page Landing Template',
    },
  },
  {
    path: '',
    component: LayoutComponent,
    loadChildren: () =>
      import('./landing/landing.route').then((mod) => mod.PAGE_ROUTES),
  },
  {
    path: '',
    component: AdminLayoutComponent,
    loadChildren: () =>
      import('./admin/admin.route').then((mod) => mod.ADMIN_ROUTES),
    canActivate: [AuthGuard],
  },
  {
    path: '',
    component: AuthLayoutComponent,
    loadChildren: () =>
      import('./account/auth/auth.route').then((mod) => mod.AUTH_ROUTES),
  },
]
