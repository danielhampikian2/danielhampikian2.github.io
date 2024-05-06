import {
	adminChatDark,
	adminChatLight,
	adminDashboardDark,
	adminDashboardLight, adminProjectDark, adminProjectLight,
	agency2Dark,
	agency2Light,
	agencyDark,
	agencyLight, authLogin, authLogout, authRecoverPassword, authRegister, authResetPassword,
	bun,
	charityDark,
	charityLight,
	companyDark,
	companyLight,
	creativeDark,
	creativeLight,
	css, designerDark, designerLight,
	eBookDark,
	eBookLight,
	financeDark,
	financeLight,
	hostingDark,
	hostingLight,
	html,
	javascript,
	marketing2Dark,
	marketing2Light,
	marketing3Dark,
	marketing3Light,
	marketingDark,
	marketingLight,
	photographyDark,
	photographyLight,
	portfolio2Dark,
	portfolio2Light,
	portfolioDark,
	portfolioLight,
	startupDark,
	startupLight,
	tailwindcss, uiComponentsDark, uiComponentsLight,
	viteJsLogo,
	yarn
} from '$lib/utilities/images';
import type { DemoType, ToolType } from '$lib/types/landing';

import {
	AirplayIcon,
	CircuitBoardIcon, FeatherIcon,
	FigmaIcon,
	FileTextIcon,
	Globe2Icon, MoveIcon,
	PackageIcon, StarIcon,
	SunMoonIcon, Users2Icon
} from 'lucide-svelte';

export const developmentTools: ToolType[] = [
	{
		image: tailwindcss,
		name: 'Tailwindcss'
	},
	{
		image: html,
		name: 'HTML5'
	},
	{
		image: css,
		name: 'CSS3'
	},
	{
		image: javascript,
		name: 'Javascript'
	},
	{
		image: bun,
		name: 'Bun'
	},
	{
		image: yarn,
		name: 'Yarn'
	},
	{
		image: viteJsLogo,
		name: 'ViteJs'
	}
];

export const demoPages: DemoType[] = [
	{
		id: 'demo',
		tag: 'Demo',
		title: 'Landing Demo',
		description: 'Elevate Your Presence: Unveiling the Power of Our Landing Demo!',
		pages: [
			{
				image: {
					light: agencyLight,
					dark: agencyDark
				},
				title: 'Agency',
				path: '/landings/agency-1'
			},
			{
				image: {
					light: agency2Light,
					dark: agency2Dark
				},
				title: 'Agency Two',
				path: '/landings/agency-2'
			},
			{
				image: {
					light: charityLight,
					dark: charityDark
				},
				title: 'Charity',
				path: '/landings/charity'
			},
			{
				image: {
					light: companyLight,
					dark: companyDark
				},
				title: 'Company',
				path: '/landings/company'
			},
			{
				image: {
					light: creativeLight,
					dark: creativeDark
				},
				title: 'Creative',
				path: '/landings/creative'
			},
			{
				image: {
					light: eBookLight,
					dark: eBookDark
				},
				title: 'Ebook',
				path: '/landings/ebook'
			},
			{
				image: {
					light: financeLight,
					dark: financeDark
				},
				title: 'Finance',
				path: '/landings/finance'
			},
			{
				image: {
					light: hostingLight,
					dark: hostingDark
				},
				title: 'Hosting',
				path: '/landings/hosting'
			},
			{
				image: {
					light: marketingLight,
					dark: marketingDark
				},
				title: 'Marketing',
				path: '/landings/marketing-1'
			},
			{
				image: {
					light: marketing2Light,
					dark: marketing2Dark
				},
				title: 'Marketing 2',
				path: '/landings/marketing-2'
			},
			{
				image: {
					light: marketing3Light,
					dark: marketing3Dark
				},
				title: 'Marketing 3',
				path: '/landings/marketing-3'
			},
			{
				image: {
					light: photographyLight,
					dark: photographyDark
				},
				title: 'Photography',
				path: '/landings/photography'
			},
			{
				image: {
					light: portfolioLight,
					dark: portfolioDark
				},
				title: 'Portfolio',
				path: '/landings/portfolio-1'
			},
			{
				image: {
					light: portfolio2Light,
					dark: portfolio2Dark
				},
				title: 'Portfolio 2',
				path: '/landings/portfolio-2'
			},
			{
				image: {
					light: startupLight,
					dark: startupDark
				},
				title: 'Startup',
				path: '/landings/startup'
			},
			{
				image: {
					light: designerLight,
					dark: designerDark
				},
				title: 'Web Designer',
				path: '/landings/web-designer'
			}
		]
	},
	{
		id: 'admin_demo',
		tag: 'Demo',
		title: 'Admin Demo',
		description: 'a cutting-edge, one-page template designed for unparalleled performance and seamless user experiences',
		pages: [
			{
				image: {
					light: adminDashboardLight,
					dark: adminDashboardDark
				},
				title: 'Dashboard',
				path: '/admin/dashboard'
			},
			{
				image: {
					light: adminChatLight,
					dark: adminChatDark
				},
				title: 'Chat',
				path: '/admin/chat'
			},
			{
				image: {
					light: adminProjectLight,
					dark: adminProjectDark
				},
				title: 'Project',
				path: '/admin/project'
			},
			{
				image: {
					light: uiComponentsLight,
					dark: uiComponentsDark
				},
				title: 'Ui Components',
				path: '/ui-kit'
			}
		]
	},
	{
		id: 'auth_demo',
		tag: 'Demo',
		title: 'Security',
		description: ' serves as the perfect starting point for your next project, showcasing the expertise in building real websites with Tailwind CSS',
		pages: [
			{
				image: {
					light: authLogin,
					dark: authLogin
				},
				title: 'Sign In',
				path: '/auth/login'
			},
			{
				image: {
					light: authRegister,
					dark: authRegister
				},
				title: 'Sign Up',
				path: '/auth/register'
			},
			{
				image: {
					light: authLogout,
					dark: authLogout
				},
				title: 'Logout',
				path: '/auth/logout'
			},
			{
				image: {
					light: authRecoverPassword,
					dark: authRecoverPassword
				},
				title: 'Forgot Password',
				path: '/auth/recover-password'
			},
			{
				image: {
					light: authResetPassword,
					dark: authResetPassword
				},
				title: 'Reset Password',
				path: '/auth/reset-password'
			}
		]
	},
	{
		id: 'features',
		tag: 'Features',
		title: 'Awesome Template Features',
		features: [
			{
				image: tailwindcss,
				title: 'Built With Tailwind CSS',
				description: 'Rapidly build modern websites without ever leaving your HTML.'
			},
			{
				icon: AirplayIcon,
				title: 'Ultra Responsive',
				description: 'Our fully Responsive design ensures your content is beautifully presented no matter what device your audience is using.'
			},
			{
				icon: SunMoonIcon,
				title: 'Dark Demo Support',
				description: 'Embark on a Rich Experience: Unveiling a Host of Advanced Features within Our Dark Demo Support Environment.'
			},
			{
				icon: PackageIcon,
				title: 'Production Ready',
				description: 'Our solutions have undergone extensive testing to ensure they can handle the demands of a production environment.'
			},
			{
				icon: FigmaIcon,
				title: 'Hygienic Design',
				description: 'Our designs feature smooth and continuous surfaces, minimizing areas where dirt, bacteria, or contaminants can accumulate.'
			},
			{
				icon: CircuitBoardIcon,
				title: 'High Performance',
				description: 'We understand that your requirements are unique. Our high-performance solutions are customizable to match your specific goals.'
			},
			{
				icon: Globe2Icon,
				title: 'Multi Browser Support',
				description: 'Our e-commerce store is rigorously tested and optimized to work flawlessly on all major web browsers, offering a consistent shopping experience to all our customers.'
			},
			{
				icon: FileTextIcon,
				title: 'Well Documented',
				description: `Our documentation is a treasure trove of valuable information, from getting started guides to advanced tutorials. It's all there to help you make the most of our services.`
			},
			{
				icon: Users2Icon,
				title: 'Great Support',
				description: `Our support team is always ready to help. Whether you have questions, encounter issues, or need guidance, we're just a message or call away.`
			},
			{
				icon: MoveIcon,
				title: 'Highly Customizable',
				description: `Our product is designed to adapt to your specific requirements. Whether you're an individual, a business, or an organization, we provide the tools to customize it to your liking.`
			},
			{
				icon: FeatherIcon,
				title: 'Light as a Feather',
				description: `From our years of experience and expertise in Development, we know users vary, they could have slow of fast network. They all deserve seamless experience in shopping with you. That's why our product is developed with fewer lines.`
			},
			{
				icon: StarIcon,
				title: 'UX Considered',
				description: `A good design does not need any explanation because a good design can speak for itself. Out app doesn't only have a good User Interface, we also have considered User experience.`
			}
		]
	}
];