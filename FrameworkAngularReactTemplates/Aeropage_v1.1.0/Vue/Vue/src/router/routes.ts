const authRoutes = [
  {
    path: '/auth',
    name: 'auth',
    children: [
      {
        path: 'login',
        name: 'auth.login',
        component: () => import('@/views/auth/login.vue'),
      },
      {
        path: 'register',
        name: 'auth.register',
        component: () => import('@/views/auth/register.vue'),
      },
      {
        path: 'logout',
        name: 'auth.logout',
        component: () => import('@/views/auth/logout.vue'),
      },
      {
        path: 'recover-password',
        name: 'auth.recover-password',
        component: () => import('@/views/auth/recover-password.vue'),
      },
      {
        path: 'reset-password',
        name: 'auth.reset-password',
        component: () => import('@/views/auth/reset-password.vue'),
      },
    ],
  },
]

const landingRoutes = [
  {
    path: '/',
    name: 'landing',
    component: () => import('@/views/index.vue'),
  },
]

const landingsRoutes = [
  {
    path: '/',
    name: 'landings',
    meta: { authRequired: true },
    children: [
      {
        path: 'agency-1',
        name: 'landings.agency-1',
        component: () => import('@/views/landings/agency-1/index.vue'),
      },
      {
        path: 'agency-2',
        name: 'landings.agency-2',
        component: () => import('@/views/landings/agency-2/index.vue'),
      },
      {
        path: 'charity',
        name: 'landings.charity',
        component: () => import('@/views/landings/charity/index.vue'),
      },
      {
        path: 'company',
        name: 'landings.company',
        component: () => import('@/views/landings/company/index.vue'),
      },
      {
        path: 'creative',
        name: 'landings.creative',
        component: () => import('@/views/landings/creative/index.vue'),
      },
      {
        path: 'ebook',
        name: 'landings.ebook',
        component: () => import('@/views/landings/ebook/index.vue'),
      },
      {
        path: 'finance',
        name: 'landings.finance',
        component: () => import('@/views/landings/finance/index.vue'),
      },
      {
        path: 'hosting',
        name: 'landings.hosting',
        component: () => import('@/views/landings/hosting/index.vue'),
      },
      {
        path: 'marketing-1',
        name: 'landings.marketing-1',
        component: () => import('@/views/landings/marketing-1/index.vue'),
      },
      {
        path: 'marketing-2',
        name: 'landings.marketing-2',
        component: () => import('@/views/landings/marketing-2/index.vue'),
      },
      {
        path: 'marketing-3',
        name: 'landings.marketing-3',
        component: () => import('@/views/landings/marketing-3/index.vue'),
      },
      {
        path: 'photography',
        name: 'landings.photography',
        component: () => import('@/views/landings/photography/index.vue'),
      },
      {
        path: 'portfolio-1',
        name: 'landings.portfolio-1',
        component: () => import('@/views/landings/portfolio-1/index.vue'),
      },
      {
        path: 'portfolio-2',
        name: 'landings.portfolio-2',
        component: () => import('@/views/landings/portfolio-2/index.vue'),
      },
      {
        path: 'startup',
        name: 'landings.startup',
        component: () => import('@/views/landings/startup/index.vue'),
      },
      {
        path: 'web-designer',
        name: 'landings.web-designer',
        component: () => import('@/views/landings/web-designer/index.vue'),
      },
    ],
  },
]

const adminRoutes = [
  {
    path: '/admin',
    name: 'admin',
    meta: { authRequired: true },
    children: [
      {
        path: 'dashboard',
        name: 'admin.dashboard',
        component: () => import('@/views/admin/dashboard/index.vue'),
      },
      {
        path: 'chat',
        name: 'admin.chat',
        component: () => import('@/views/admin/chat/index.vue'),
      },
      {
        path: 'project',
        name: 'admin.project',
        component: () => import('@/views/admin/project/index.vue'),
      },
    ],
  },
]

const uiRoute = [
  {
    path: '/ui-kit',
    name: 'ui-kit',
    meta: { authRequired: true },
    component: () => import('@/views/ui-kit/index.vue'),
  },
]

export const allRoute = [...authRoutes, ...landingRoutes, ...landingsRoutes, ...adminRoutes, ...uiRoute]
