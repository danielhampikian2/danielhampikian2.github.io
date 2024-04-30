import { Route } from '@angular/router'

export const ADMIN_ROUTES: Route[] = [
  {
    path: 'admin/dashboard',
    loadComponent: () =>
      import('./dashboards/dashboards.component').then(
        (mod) => mod.DashboardsComponent
      ),
    data: { title: 'Dashboard' },
  },
  {
    path: 'admin/project',
    loadComponent: () =>
      import('./projects/projects.component').then(
        (mod) => mod.ProjectsComponent
      ),
    data: { title: 'Chat' },
  },
  {
    path: 'admin/chat',
    loadComponent: () =>
      import('./chat/chat.component').then((mod) => mod.ChatComponent),
    data: { title: 'Project' },
  },
  {
    path: 'ui/components',
    loadComponent: () =>
      import('./ui/ui.component').then((mod) => mod.UiComponent),
    data: { title: 'UI Component' },
  },
]
