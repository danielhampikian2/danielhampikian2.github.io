import {
	ComponentIcon,
	FacebookIcon,
	InstagramIcon, LinkedinIcon,
	MessageSquareIcon,
	RadarIcon,
	SnowflakeIcon,
	TargetIcon, TwitterIcon
} from 'lucide-svelte';
import type { NavbarLinkType, SocialLinkType } from '$lib/types/layout';

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
];

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
];

export const socialLinkData: SocialLinkType[] = [
	{
		icon: FacebookIcon,
		name: 'Facebook',
		path: null
	},
	{
		icon: InstagramIcon,
		name: 'Instagram',
		path: null
	},
	{
		icon: TwitterIcon,
		name: 'Twitter',
		path: null
	},
	{
		icon: LinkedinIcon,
		name: 'Linkedin',
		path: null
	}
];