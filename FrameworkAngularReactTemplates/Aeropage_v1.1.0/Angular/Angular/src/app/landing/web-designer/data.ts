export type WorkFilterType = {
  category: string
  date: string
  title: string
  description: string
  src: string
}

// json WorkFilter
export const workFilter: WorkFilterType[] = [
  {
    category: 'webDesign',
    date: '27 Aug 2021',
    title: 'Medium Scene',
    description:
      'Explore a medium scene where creativity meets innovation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua.',
    src: 'assets/images/landing/web-designer/img-2.jpg',
  },
  {
    category: 'graphicDesign',
    date: '27 Aug 2021',
    title: 'The Emergence of Design',
    description:
      'Proin elementum ipsum vel mauris pellentesque accumsan. Nulla in erat ligula, vivamus sed egestas elit, sit amet convallis metus.',
    src: 'assets/images/landing/web-designer/img-3.jpg',
  },
  {
    category: 'illustrator',
    date: '27 Aug 2021',
    title: 'Amplitude',
    description:
      'Aliquam tempus nunc nec rutrum malesuada. Proin pulvinar augue quis pharetra vulputate. Sed lacinia convallis orci vitae condimentum.',
    src: 'assets/images/landing/web-designer/img-4.jpg',
  },
  {
    category: 'photography',
    date: '27 Aug 2021',
    title: 'Visual Enigma',
    description:
      'Suspendisse scelerisque convallis nibh. Maecenas bibendum porta mattis. Donec quis nibh porta dolor ultrices bibendum vel quis leo.',
    src: 'assets/images/landing/web-designer/img-5.jpg',
  },
]
