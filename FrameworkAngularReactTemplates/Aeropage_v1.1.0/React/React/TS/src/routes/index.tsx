import { lazy } from 'react'
import { type RouteProps } from 'react-router-dom'

const HomePage = lazy(() => import('@/pages/home'))

// landing routes
const Agency = lazy(() => import('@/pages/landing/Agency'))
const Agency2 = lazy(() => import('@/pages/landing/Agency2'))
const Charity = lazy(() => import('@/pages/landing/Charity'))
const Company = lazy(() => import('@/pages/landing/Company'))
const Creative = lazy(() => import('@/pages/landing/Creative'))
const Ebook = lazy(() => import('@/pages/landing/Ebook'))
const Finance = lazy(() => import('@/pages/landing/Finance'))
const Hosting = lazy(() => import('@/pages/landing/Hosting'))
const Marketing = lazy(() => import('@/pages/landing/Marketing'))
const Marketing2 = lazy(() => import('@/pages/landing/Marketing2'))
const Marketing3 = lazy(() => import('@/pages/landing/Marketing3'))
const Photography = lazy(() => import('@/pages/landing/Photography'))
const Portfolio = lazy(() => import('@/pages/landing/Portfolio'))
const Portfolio2 = lazy(() => import('@/pages/landing/Portfolio2'))
const Startup = lazy(() => import('@/pages/landing/Startup'))
const WebDesigner = lazy(() => import('@/pages/landing/WebDesigner'))

// admin routes
const Dashboard = lazy(() => import('@/pages/admin/Dashboard'))
const Chat = lazy(() => import('@/pages/admin/Chat'))
const Project = lazy(() => import('@/pages/admin/Project'))
const UiComponents = lazy(() => import('@/pages/admin/UiComponents'))

// auth routes
const SignIn = lazy(() => import('@/pages/auth/SignIn'))
const SignUp = lazy(() => import('@/pages/auth/SignUp'))
const ResetPassword = lazy(() => import('@/pages/auth/ResetPassword'))
const ForgotPassword = lazy(() => import('@/pages/auth/ForgotPassword'))
const Logout = lazy(() => import('@/pages/auth/Logout'))

type RoutesProps = {
  path: RouteProps['path']
  element?: RouteProps['element']
}

const homeRoutes: RoutesProps[] = [
  {
    path: '/',
    element: <HomePage />,
  },
]

const landingRoutes: RoutesProps[] = [
  {
    path: '/landing/agency',
    element: <Agency />,
  },
  {
    path: '/landing/agency-2',
    element: <Agency2 />,
  },
  {
    path: '/landing/charity',
    element: <Charity />,
  },
  {
    path: '/landing/company',
    element: <Company />,
  },
  {
    path: '/landing/creative',
    element: <Creative />,
  },
  {
    path: '/landing/ebook',
    element: <Ebook />,
  },
  {
    path: '/landing/finance',
    element: <Finance />,
  },
  {
    path: '/landing/hosting',
    element: <Hosting />,
  },
  {
    path: '/landing/marketing',
    element: <Marketing />,
  },
  {
    path: '/landing/marketing-2',
    element: <Marketing2 />,
  },
  {
    path: '/landing/marketing-3',
    element: <Marketing3 />,
  },
  {
    path: '/landing/photography',
    element: <Photography />,
  },
  {
    path: '/landing/portfolio',
    element: <Portfolio />,
  },
  {
    path: '/landing/portfolio-2',
    element: <Portfolio2 />,
  },
  {
    path: '/landing/startup',
    element: <Startup />,
  },
  {
    path: '/landing/web-designer',
    element: <WebDesigner />,
  },
]

const adminRoutes: RoutesProps[] = [
  {
    path: '/admin/dashboard',
    element: <Dashboard />,
  },
  {
    path: '/admin/chat',
    element: <Chat />,
  },
  {
    path: '/admin/project',
    element: <Project />,
  },
  {
    path: '/admin/ui-components',
    element: <UiComponents />,
  },
]

const authRoutes: RoutesProps[] = [
  {
    path: '/auth/sign-in',
    element: <SignIn />,
  },
  {
    path: '/auth/sign-up',
    element: <SignUp />,
  },
  {
    path: '/auth/reset-pass',
    element: <ResetPassword />,
  },
  {
    path: '/auth/forgot-pass',
    element: <ForgotPassword />,
  },
  {
    path: '/auth/logout',
    element: <Logout />,
  },
]

export { adminRoutes, homeRoutes, landingRoutes, authRoutes }

export type { RoutesProps }
