type HostingPricing = {
  name: string
  description: string
  price: string
  billing: string
  features: string[]
  priceDetail: string
}

type PlanType = {
  order: string
  icon: string
  title: string
  description: string
}

export const hostingPricing: HostingPricing[] = [
  {
    name: 'Shared',
    description: 'For individuals and teams',
    price: '8',
    billing: 'Per editor,monthly',
    priceDetail: 'With Unlimited email',
    features: [
      'Unlimited Email',
      'Unlimited Updates',
      'Free 5 host & domain',
      '24/7 Dedicated Support',
      'Backing',
      'Up to 10 users monthly',
    ],
  },
  {
    name: 'Wordpress',
    description: 'For individuals and teams',
    price: '12',
    billing: 'For team,monthly',
    priceDetail: 'team With 8 users',
    features: [
      'Unlimited Email',
      'Unlimited Updates',
      'Free 5 host & domain',
      '24/7 Dedicated Support',
      'Backing',
      'Up to 30 users monthly',
    ],
  },
  {
    name: 'VPS',
    description: 'For individuals and teams',
    price: '37',
    billing: 'All users,monthly',
    priceDetail: 'for Unlimited users',
    features: [
      'Unlimited Email',
      'Unlimited Updates',
      'Free 5 host & domain',
      '24/7 Dedicated Support',
      'Backing',
      'Up to 80 users monthly',
    ],
  },
]

export const plans: PlanType[] = [
  {
    order: 'order-1',
    icon: 'navigation',
    title: 'Domain name configuration',
    description:
      'Streamline the connection of your site to your domain name with Vault.',
  },
  {
    order: 'order-2',
    icon: 'layers',
    title: '20/8 network security',
    description:
      'Enjoy peace of mind with constant network security for your visitors.',
  },
  {
    order: 'order-3',
    icon: 'shield',
    title: 'User-friendly control panel',
    description:
      'Effortlessly manage app installations and backups with the industry-standard cPanel.',
  },
  {
    order: '2xl:order-4',
    icon: 'table-2',
    title: 'Scalable resources',
    description: "Easily boost your site's CPU/RAM for increased performance.",
  },
  {
    order: 'order-4 2xl:order-5',
    icon: 'folder-down',
    title: 'Worldwide Data Centers',
    description:
      'Enhance page loading speed and improve the customer experience with Vault hosting.',
  },
  {
    order: '2xl:order-5',
    icon: 'bring-to-front',
    title: 'Click installation',
    description: 'Simplify app integration effortlessly with Installatron.',
  },
  {
    order: '',
    icon: 'file',
    title: 'Submit Support Request',
    description:
      'Initiate a Support Request for Prompt Assistance and Timely Resolution.',
  },
  {
    order: '',
    icon: 'layers',
    title: 'Choose Site Transfer',
    description:
      'Streamline the migration process with added security measures.',
  },
  {
    order: '',
    icon: 'check',
    title: 'Completion',
    description: 'Your request is now fulfilled. Thank you for choosing us!',
  },
]
