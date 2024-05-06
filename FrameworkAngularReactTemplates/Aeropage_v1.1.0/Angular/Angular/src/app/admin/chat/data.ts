type MessageType = {
  id: number
  timestamp: string
  sender: string
  content: string
  isSender: boolean
}

type ContactList = {
  avatar: string
  name: string
  time: string
  message: string
  notificationCount?: number
}

export const message: MessageType[] = [
  {
    id: 1,
    timestamp: '10:00',
    sender: 'John K',
    content: 'Hello!',
    isSender: true,
  },
  {
    id: 2,
    timestamp: '10:01',
    sender: 'Diane B',
    content: 'Hi, How are you? What about our next meeting?',
    isSender: false,
  },
  {
    id: 3,
    timestamp: '10:01',
    sender: 'John K',
    content: 'Yeah, everything is fine',
    isSender: true,
  },
  {
    id: 4,
    timestamp: '10:02',
    sender: 'Diane B',
    content: "Wow, that's great",
    isSender: false,
  },
  {
    id: 5,
    timestamp: '10:02',
    sender: 'John K',
    content: "Let's have it today if you are free",
    isSender: true,
  },
  {
    id: 6,
    timestamp: '10:03',
    sender: 'Diane B',
    content: 'Sure thing! let me know if 2pm works for you',
    isSender: false,
  },
  {
    id: 7,
    timestamp: '10:04',
    sender: 'John K',
    content:
      'Sorry, I have another meeting scheduled at 2pm. Can we have it at 3pm instead?',
    isSender: true,
  },
  {
    id: 8,
    timestamp: '10:04',
    sender: 'John K',
    content:
      'We can also discuss the presentation talk format if you have some extra minutes',
    isSender: true,
  },
  {
    id: 9,
    timestamp: '10:05',
    sender: 'Diane B',
    content:
      "3pm it is. Sure, let's discuss the presentation format, it would be great to finalize today. I am attaching the last year format and assets here...",
    isSender: false,
  },
]

export const contact: ContactList[] = [
  {
    avatar: 'assets/images/avatars/img-2.jpg',
    name: 'Brandon Smith',
    time: '4:30am',
    message: 'How are you today?',
    notificationCount: 3,
  },
  {
    avatar: 'assets/images/avatars/img-4.jpg',
    name: 'Sky Adams',
    time: '4:30am',
    message: 'We can play game Today?',
    notificationCount: 3,
  },
  {
    avatar: 'assets/images/avatars/img-5.jpg',
    name: 'John Kish',
    time: '5:30am',
    message: 'typing...',
  },
  {
    avatar: 'assets/images/avatars/img-7.jpg',
    name: 'Maria C',
    time: 'Thu',
    message: 'Are we going to have planning meeting today?',
    notificationCount: 2,
  },
  {
    avatar: 'assets/images/avatars/img-6.jpg',
    name: 'Rhonda D',
    time: 'Wed',
    message: 'Please check these design assets...',
  },
  {
    avatar: 'assets/images/avatars/img-3.jpg',
    name: 'Michael H',
    time: 'Tue',
    message: 'I something have awesome...',
  },
  {
    avatar: 'assets/images/avatars/img-6.jpg',
    name: 'Thomas R',
    time: 'Tue',
    message: 'You and Tony Meet Today...',
  },
  {
    avatar: 'assets/images/avatars/img-8.jpg',
    name: 'Jonsy K',
    time: 'Tue',
    message: 'Howdy?',
  },
  {
    avatar: 'assets/images/avatars/img-4.jpg',
    name: 'Ricky J',
    time: 'Mon',
    message: 'Are you interested in learning?',
  },
]
