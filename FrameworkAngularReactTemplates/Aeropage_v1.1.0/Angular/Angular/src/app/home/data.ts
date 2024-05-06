type DemoType = {
  id: number
  img: string
  darkImg?: string
  name: string
  link: string
}

type LandingDataType = {
  title: string
  url: string
}

type FeatureType = {
  title: string
  description: string
  icon: string
}

export const demos: DemoType[] = [
  {
    id: 1,
    img: 'assets/images/demo/agency.png',
    darkImg: 'assets/images/demo/agency-dark.png',
    name: 'Agency',
    link: 'index-agency',
  },
  {
    id: 2,
    img: 'assets/images/demo/agency-2.png',
    darkImg: 'assets/images/demo/agency-2-dark.png',
    name: 'Agency Two',
    link: '/index-agency-2',
  },
  {
    id: 3,
    img: 'assets/images/demo/charity.png',
    darkImg: 'assets/images/demo/charity-dark.png',
    name: 'Charity',
    link: '/index-charity',
  },
  {
    id: 4,
    img: 'assets/images/demo/company.png',
    darkImg: 'assets/images/demo/company-dark.png',
    name: 'Company',
    link: '/index-company',
  },
  {
    id: 5,
    img: 'assets/images/demo/creative.png',
    darkImg: 'assets/images/demo/creative-dark.png',
    name: 'Creative',
    link: '/index-creative',
  },
  {
    id: 6,
    img: 'assets/images/demo/ebook.png',
    darkImg: 'assets/images/demo/ebook-dark.png',
    name: 'Ebook',
    link: '/index-ebook',
  },
  {
    id: 7,
    img: 'assets/images/demo/finance.png',
    darkImg: 'assets/images/demo/finance-dark.png',
    name: 'Finance',
    link: '/index-finance',
  },
  {
    id: 8,
    img: 'assets/images/demo/hosting.png',
    darkImg: 'assets/images/demo/hosting-dark.png',
    name: 'Hosting',
    link: '/index-hosting',
  },
  {
    id: 9,
    img: 'assets/images/demo/marketing.png',
    darkImg: 'assets/images/demo/marketing-dark.png',
    name: 'Marketing',
    link: '/index-marketing',
  },
  {
    id: 10,
    img: 'assets/images/demo/marketing-2.png',
    darkImg: 'assets/images/demo/marketing-2-dark.png',
    name: 'Marketing 2',
    link: '/index-marketing-2',
  },
  {
    id: 11,
    img: 'assets/images/demo/marketing-3.png',
    darkImg: 'assets/images/demo/marketing-3-dark.png',
    name: 'Marketing 3',
    link: '/index-marketing-3',
  },
  {
    id: 12,
    img: 'assets/images/demo/photography.png',
    darkImg: 'assets/images/demo/photography-dark.png',
    name: 'Photography',
    link: '/index-photography',
  },
  {
    id: 13,
    img: 'assets/images/demo/portfolio.png',
    darkImg: 'assets/images/demo/portfolio-dark.png',
    name: 'Portfolio',
    link: '/index-portfolio',
  },
  {
    id: 14,
    img: 'assets/images/demo/portfolio-2.png',
    darkImg: 'assets/images/demo/portfolio-2-dark.png',
    name: 'Portfolio 2',
    link: '/index-portfolio-2',
  },
  {
    id: 15,
    img: 'assets/images/demo/startup.png',
    darkImg: 'assets/images/demo/startup-dark.png',
    name: 'Startup',
    link: '/index-startup',
  },
  {
    id: 16,
    img: 'assets/images/demo/web-designer.png',
    darkImg: 'assets/images/demo/web-designer-dark.png',
    name: 'Web Designer',
    link: '/index-webDesigner',
  },

  {
    id: 17,
    img: 'assets/images/demo/admin-dashboard.png',
    darkImg: 'assets/images/demo/admin-dashboard-dark.png',
    name: 'Dashboard',
    link: '/admin/dashboard',
  },
  {
    id: 18,
    img: 'assets/images/demo/admin-chat.png',
    darkImg: 'assets/images/demo/admin-chat-dark.png',
    name: 'Chat',
    link: '/admin/chat',
  },
  {
    id: 19,
    img: 'assets/images/demo/admin-project.png',
    darkImg: 'assets/images/demo/admin-project-dark.png',
    name: 'Project',
    link: '/admin/project',
  },
  {
    id: 20,
    img: 'assets/images/demo/ui-components.png',
    darkImg: 'assets/images/demo/ui-components-dark.png',
    name: 'Ui Components',
    link: '/ui/components',
  },
  {
    id: 21,
    img: 'assets/images/demo/auth-login.png',
    name: 'Sign In',
    link: '/auth/login',
  },
  {
    id: 22,
    img: 'assets/images/demo/auth-register.png',
    name: 'Sign Up',
    link: '/auth/register',
  },
  {
    id: 23,
    img: 'assets/images/demo/auth-logout.png',
    name: 'Logout',
    link: '/auth/logout',
  },
  {
    id: 24,
    img: 'assets/images/demo/auth-recoverpw.png',
    name: 'Forgot Password',
    link: '/auth/recoverpw',
  },
  {
    id: 25,
    img: 'assets/images/demo/auth-reset-password.png',
    name: 'Reset Password',
    link: '/auth/resetpassword',
  },
]

export const landing: LandingDataType[] = [
  { title: 'Agency', url: '/index-agency' },
  { title: 'Agency Two', url: '/index-agency-2' },
  { title: 'Charity', url: '/index-charity' },
  { title: 'Company', url: '/index-company' },
  { title: 'Creative', url: '/index-creative' },
  { title: 'eBook', url: '/index-ebook' },
  { title: 'Finance', url: '/index-finance' },
  { title: 'Hosting', url: '/index-hosting' },
  { title: 'Marketing', url: '/index-marketing' },
  { title: 'Marketing Two', url: '/index-marketing-2' },
  { title: 'Marketing Three', url: '/index-marketing-3' },
  { title: 'Photography', url: '/index-photography' },
  { title: 'Portfolio', url: '/index-portfolio' },
  { title: 'Portfolio Two', url: '/index-portfolio-2' },
  { title: 'Startup', url: '/index-startup' },
  { title: 'Web Designer', url: '/index-webDesigner' },
]

export const features: FeatureType[] = [
  {
    title: 'Built With Tailwind CSS',
    description:
      'Rapidly build modern websites without ever leaving your HTML.',
    icon: '',
  },
  {
    title: 'Ultra Responsive',
    description:
      'Our fully Responsive design ensures your content is beautifully presented no matter what device your audience is using.',
    icon: 'airplay',
  },
  {
    title: 'Dark Demo Support',
    description:
      'Embark on a Rich Experience: Unveiling a Host of Advanced Features within Our Dark Demo Support Environment.',
    icon: 'sun-moon',
  },
  {
    title: 'Production Ready',
    description:
      'Our solutions have undergone extensive testing to ensure they can handle the demands of a production environment.',
    icon: 'package',
  },
  {
    title: 'Hygienic Design',
    description:
      'Our designs feature smooth and continuous surfaces, minimizing areas where dirt, bacteria, or contaminants can accumulate.',
    icon: 'figma',
  },
  {
    title: 'High Performance',
    description:
      'We understand that your requirements are unique. Our high-performance solutions are customizable to match your specific goals.',
    icon: 'circuit-board',
  },
  {
    title: 'Multi Browser Support',
    description:
      'Our e-commerce store is rigorously tested and optimized to work flawlessly on all major web browsers, offering a consistent shopping experience to all our customers.',
    icon: 'globe-2',
  },
  {
    title: 'Well Documented',
    description:
      "Our documentation is a treasure trove of valuable information, from getting started guides to advanced tutorials. It's all there to help you make the most of our services.",
    icon: 'file-text',
  },
  {
    title: 'Great Support',
    description:
      "Our support team is always ready to help. Whether you have questions, encounter issues, or need guidance, we're just a message or call away.",
    icon: 'users',
  },
  {
    title: 'Highly Customizable',
    description:
      "Our product is designed to adapt to your specific requirements. Whether you're an individual, a business, or an organization, we provide the tools to customize it to your liking.",
    icon: 'move',
  },
  {
    title: 'Light as a Feather',
    description:
      "From our years of experience and expertise in Development, we know users vary, they could have slow of fast network. They all deserve seamless experience in shopping with you. That's why our product is developed with fewer lines.",
    icon: 'feather',
  },
  {
    title: 'UX Considered',
    description:
      "A good design does not need any explanation because a good design can speak for itself. Out app doesn't only have a good User Interface, we also have considered User experience.",
    icon: 'star',
  },
]
