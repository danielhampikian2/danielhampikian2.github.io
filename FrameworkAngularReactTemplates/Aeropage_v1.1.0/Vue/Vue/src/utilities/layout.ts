import type { NavbarLinkType } from '@/types/layout'
import { ComponentIcon, MessageSquareIcon, RadarIcon, SnowflakeIcon, TargetIcon } from 'lucide-vue-next'

export const navbarLinkData: NavbarLinkType[] = [
  {
    name: 'Agency',
    link: { name: 'landings.agency-1' },
  },
  {
    name: 'Agency Two',
    link: { name: 'landings.agency-2' },
  },
  {
    name: 'Charity',
    link: { name: 'landings.charity' },
  },
  {
    name: 'Company',
    link: { name: 'landings.company' },
  },
  {
    name: 'Creative',
    link: { name: 'landings.creative' },
  },
  {
    name: 'Ebook',
    link: { name: 'landings.ebook' },
  },
  {
    name: 'Finance',
    link: { name: 'landings.finance' },
  },
  {
    name: 'Hosting',
    link: { name: 'landings.hosting' },
  },
  {
    name: 'Marketing',
    link: { name: 'landings.marketing-1' },
  },
  {
    name: 'Marketing 2',
    link: { name: 'landings.marketing-2' },
  },
  {
    name: 'Marketing 3',
    link: { name: 'landings.marketing-3' },
  },
  {
    name: 'Photography',
    link: { name: 'landings.photography' },
  },
  {
    name: 'Portfolio',
    link: { name: 'landings.portfolio-1' },
  },
  {
    name: 'Portfolio 2',
    link: { name: 'landings.portfolio-2' },
  },
  {
    name: 'Startup',
    link: { name: 'landings.startup' },
  },
  {
    name: 'Web Designer',
    link: { name: 'landings.web-designer' },
  },
]

export const adminNavbarLinkData: NavbarLinkType[] = [
  {
    icon: RadarIcon,
    name: 'Dashboard',
    link: { name: 'admin.dashboard' },
  },
  {
    icon: MessageSquareIcon,
    name: 'Chat',
    link: { name: 'admin.chat' },
  },
  {
    icon: TargetIcon,
    name: 'Project',
    link: { name: 'admin.project' },
  },
  {
    icon: ComponentIcon,
    name: 'UI Components',
    link: { name: 'ui-kit' },
  },
  {
    icon: SnowflakeIcon,
    name: 'Landing',
    link: { name: 'landing' },
  },
]
