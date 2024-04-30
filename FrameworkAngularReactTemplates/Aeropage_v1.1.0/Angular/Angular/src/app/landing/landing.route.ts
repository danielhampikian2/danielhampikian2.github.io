import { Route } from '@angular/router'

// PAGE ROUTE
export const PAGE_ROUTES: Route[] = [
  {
    path: 'index-agency',
    loadComponent: () =>
      import('./agency/agency.component').then((mod) => mod.AgencyComponent),
    data: { title: 'Agency' },
  },
  {
    path: 'index-agency-2',
    loadComponent: () =>
      import('./agency2/agency2.component').then((mod) => mod.Agency2Component),
    data: { title: 'Agency-2' },
  },
  {
    path: 'index-charity',
    loadComponent: () =>
      import('./charity/charity.component').then((mod) => mod.CharityComponent),
    data: { title: 'Charity' },
  },
  {
    path: 'index-company',
    loadComponent: () =>
      import('./company/company.component').then((mod) => mod.CompanyComponent),
    data: { title: 'Company' },
  },
  {
    path: 'index-creative',
    loadComponent: () =>
      import('./creative/creative.component').then(
        (mod) => mod.CreativeComponent
      ),
    data: { title: 'Creative' },
  },
  {
    path: 'index-ebook',
    loadComponent: () =>
      import('./ebook/ebook.component').then((mod) => mod.EbookComponent),
    data: { title: 'Ebook' },
  },
  {
    path: 'index-finance',
    loadComponent: () =>
      import('./finance/finance.component').then((mod) => mod.FinanceComponent),
    data: { title: 'Finance' },
  },
  {
    path: 'index-hosting',
    loadComponent: () =>
      import('./hosting/hosting.component').then((mod) => mod.HostingComponent),
    data: { title: 'Hosting' },
  },
  {
    path: 'index-marketing',
    loadComponent: () =>
      import('./marketing/marketing.component').then(
        (mod) => mod.MarketingComponent
      ),
    data: { title: 'Marketing' },
  },
  {
    path: 'index-marketing-2',
    loadComponent: () =>
      import('./marketing2/marketing2.component').then(
        (mod) => mod.Marketing2Component
      ),
    data: { title: 'Marketing-2' },
  },
  {
    path: 'index-marketing-3',
    loadComponent: () =>
      import('./marketing3/marketing3.component').then(
        (mod) => mod.Marketing3Component
      ),
    data: { title: 'Marketing-3' },
  },
  {
    path: 'index-photography',
    loadComponent: () =>
      import('./photography/photography.component').then(
        (mod) => mod.PhotographyComponent
      ),
    data: { title: 'Photography' },
  },
  {
    path: 'index-portfolio',
    loadComponent: () =>
      import('./portfolio/portfolio.component').then(
        (mod) => mod.PortfolioComponent
      ),
    data: { title: 'Portfolio' },
  },
  {
    path: 'index-portfolio-2',
    loadComponent: () =>
      import('./portfolio2/portfolio2.component').then(
        (mod) => mod.Portfolio2Component
      ),
    data: { title: 'Portfolio-2' },
  },
  {
    path: 'index-startup',
    loadComponent: () =>
      import('./startup/startup.component').then((mod) => mod.StartupComponent),
    data: { title: 'Startup' },
  },
  {
    path: 'index-webDesigner',
    loadComponent: () =>
      import('./web-designer/web-designer.component').then(
        (mod) => mod.WebDesignerComponent
      ),
    data: { title: 'WebDesigner' },
  },
]
