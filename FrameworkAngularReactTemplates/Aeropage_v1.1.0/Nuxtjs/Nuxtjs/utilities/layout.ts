import type { NavbarLinkType } from '@/types/layout'
import {
  ComponentIcon,
  MessageSquareIcon,
  RadarIcon,
  SnowflakeIcon,
  TargetIcon
} from 'lucide-vue-next'

export const navbarLinkData: NavbarLinkType[] = [
  {
    name: 'Agency',
    path: '/landings/agency-1'
  },
  {
    name: 'Agency Two',
    path: '/landings/agency-2'
  },
  {
    name: 'Charity',
    path: '/landings/charity'
  },
  {
    name: 'Company',
    path: '/landings/company'
  },
  {
    name: 'Creative',
    path: '/landings/creative'
  },
  {
    name: 'Ebook',
    path: '/landings/ebook'
  },
  {
    name: 'Finance',
    path: '/landings/finance'
  },
  {
    name: 'Hosting',
    path: '/landings/hosting'
  },
  {
    name: 'Marketing',
    path: '/landings/marketing-1'
  },
  {
    name: 'Marketing 2',
    path: '/landings/marketing-2'
  },
  {
    name: 'Marketing 3',
    path: '/landings/marketing-3'
  },
  {
    name: 'Photography',
    path: '/landings/photography'
  },
  {
    name: 'Portfolio',
    path: '/landings/portfolio-1'
  },
  {
    name: 'Portfolio 2',
    path: '/landings/portfolio-2'
  },
  {
    name: 'Startup',
    path: '/landings/startup'
  },
  {
    name: 'Web Designer',
    path: '/landings/web-designer'
  }
]

export const adminNavbarLinkData: NavbarLinkType[] = [
  {
    icon: RadarIcon,
    name: 'Dashboard',
    path: '/admin/dashboard'
  },
  {
    icon: MessageSquareIcon,
    name: 'Chat',
    path: '/admin/chat'
  },
  {
    icon: TargetIcon,
    name: 'Project',
    path: '/admin/project'
  },
  {
    icon: ComponentIcon,
    name: 'UI Components',
    path: '/ui-kit'
  },
  {
    icon: SnowflakeIcon,
    name: 'Landing',
    path: '/'
  }
]
