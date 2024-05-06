type sourcesType = { source: string; visits: number; conversions: number }
type performanceType = {
  name: string
  position: string
  image: string
}

type RecentOrders = {
  orderNumber: string
  product: string
  customer: string
  price: string
  status: string
}

export const sources: sourcesType[] = [
  {
    source: 'Direct',
    visits: 358,
    conversions: 250,
  },
  {
    source: 'Referal',
    visits: 501,
    conversions: 50,
  },
  {
    source: 'Email',
    visits: 460,
    conversions: 600,
  },
  {
    source: 'Organic',
    visits: 920,
    conversions: 150,
  },
]

export const performance: performanceType[] = [
  {
    name: 'Saske N',
    position: 'Senior Sales Guy',
    image: 'assets/images/avatars/img-7.jpg',
  },
  {
    name: 'Greeva Y',
    position: 'Social Campaign',
    image: 'assets/images/avatars/img-9.jpg',
  },
  {
    name: 'Nik G',
    position: 'Inventory Manager',
    image: 'assets/images/avatars/img-4.jpg',
  },
  {
    name: 'Hardik G',
    position: 'Sales Person',
    image: 'assets/images/avatars/img-1.jpg',
  },
  {
    name: 'GB Patel G',
    position: 'Sales Person',
    image: 'assets/images/avatars/img-8.jpg',
  },
  {
    name: 'Jessica B',
    position: 'Inventory Senior Manager',
    image: 'assets/images/avatars/img-2.jpg',
  },
  {
    name: 'Tony S',
    position: 'Sales Guy',
    image: 'assets/images/avatars/img-3.jpg',
  },
]

export const recentOrders: RecentOrders[] = [
  {
    orderNumber: '#98754',
    product: 'ASOS Ridley High',
    customer: 'Otto B',
    price: '$79.49',
    status: 'Pending',
  },
  {
    orderNumber: '#98753',
    product: 'Marco Lightweight Shirt',
    customer: 'Mark P',
    price: '$125.49',
    status: 'Delivered',
  },
  {
    orderNumber: '#98752',
    product: 'Half Sleeve Shirt',
    customer: 'Dave B',
    price: '$35.49',
    status: 'Declined',
  },
  {
    orderNumber: '#98751',
    product: 'Lightweight Jacket',
    customer: 'Shreyu N',
    price: '$49.49',
    status: 'Delivered',
  },
  {
    orderNumber: '#98750',
    product: 'Marco Shoes',
    customer: 'Rik N',
    price: '$69.49',
    status: 'Declined',
  },
]
