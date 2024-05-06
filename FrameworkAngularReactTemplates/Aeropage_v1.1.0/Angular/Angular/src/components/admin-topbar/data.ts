type MenuType = {
  link: string
  icon: string
  text: string
  active?: boolean
}

export const adminMenu: MenuType[] = [
  {
    link: '/admin/dashboard',
    icon: 'radar',
    text: 'Dashboard',
    active: true,
  },
  {
    link: '/admin/chat',
    icon: 'messages-square',
    text: 'Chat',
  },
  {
    link: '/admin/project',
    icon: 'target',
    text: 'Project',
  },
  {
    link: '/ui/components',
    icon: 'component',
    text: 'UI Components',
  },
  {
    link: '',
    icon: 'snowflake',
    text: 'Landing',
  },
]
