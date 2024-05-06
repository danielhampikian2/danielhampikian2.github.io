type ProjectType = {
  title: string
  status: string
  items: Project[]
}

type Project = {
  name: string
  description: string
  images: string[]
  likesCount: number | null
  dates: {
    calendar: string
    justify: number
    comment: number
  }
  progress: {
    percentage: number
    barColor: string
  }
}

export const projects: ProjectType[] = [
  {
    title: 'Web Design',
    status: 'Completed',
    items: [
      {
        name: 'Landing page Design',
        description:
          'If several languages coalesce, the grammar of the resulting language is more regular.',
        images: [
          'assets/images/avatars/img-2.jpg',
          'assets/images/avatars/img-3.jpg',
        ],
        likesCount: 2,
        dates: {
          calendar: '15 Dec',
          justify: 56,
          comment: 224,
        },
        progress: {
          percentage: 66,
          barColor: 'bg-teal-500',
        },
      },
    ],
  },
  {
    title: 'Android',
    status: 'Pending',
    items: [
      {
        name: 'App Design and Develop',
        description:
          'To achieve this, it would be necessary to have uniform grammar and more common words.',
        images: [
          'assets/images/avatars/img-4.jpg',
          'assets/images/avatars/img-5.jpg',
          'assets/images/avatars/img-6.jpg',
          'assets/images/avatars/img-7.jpg',
        ],
        likesCount: 4,
        dates: {
          calendar: '28 Nov',
          justify: 62,
          comment: 196,
        },
        progress: {
          percentage: 33,
          barColor: 'bg-amber-500',
        },
      },
    ],
  },
  {
    title: 'Web Design',
    status: 'Frontend Completed',
    items: [
      {
        name: 'New Admin Design',
        description:
          'If several languages coalesce, the grammar of the resulting language is more regular.',
        images: [
          'assets/images/avatars/img-9.jpg',
          'assets/images/avatars/img-8.jpg',
          'assets/images/avatars/img-1.jpg',
        ],
        likesCount: 3,
        dates: {
          calendar: '19 Nov',
          justify: 69,
          comment: 102,
        },
        progress: {
          percentage: 50,
          barColor: 'bg-teal-500',
        },
      },
    ],
  },
  {
    title: 'Android',
    status: 'Pending',
    items: [
      {
        name: 'Custom Software Development',
        description:
          'Their separate existence is a myth. For science, music, sport, etc uses the vocabulary.',
        images: [
          'assets/images/avatars/img-2.jpg',
          'assets/images/avatars/img-8.jpg',
          'assets/images/avatars/img-9.jpg',
        ],
        likesCount: null,
        dates: {
          calendar: '02 Nov',
          justify: 72,
          comment: 184,
        },
        progress: {
          percentage: 25,
          barColor: 'bg-amber-500/80',
        },
      },
    ],
  },
  {
    title: 'Web Design',
    status: 'In Progress',
    items: [
      {
        name: 'Brand logo design',
        description:
          'Everyone realizes why a new common language refuse to pay expensive translators.',
        images: ['assets/images/avatars/img-6.jpg'],
        likesCount: null,
        dates: {
          calendar: '19 Nov',
          justify: 69,
          comment: 102,
        },
        progress: {
          percentage: 75,
          barColor: 'bg-primary',
        },
      },
    ],
  },
  {
    title: 'Web Design',
    status: 'Completed',
    items: [
      {
        name: 'Website Redesign',
        description:
          'The languages only differ in their grammar pronunciation and their most common words.',
        images: [
          'assets/images/avatars/img-3.jpg',
          'assets/images/avatars/img-9.jpg',
        ],
        likesCount: null,
        dates: {
          calendar: '19 Nov',
          justify: 69,
          comment: 102,
        },
        progress: {
          percentage: 50,
          barColor: 'bg-teal-500',
        },
      },
    ],
  },
]
