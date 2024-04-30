import type { LinkType } from '@/types/index'
import type { FunctionalComponent } from 'vue'

export type NavbarLinkType = {
  id?: string
  name: string
  icon?: FunctionalComponent
  link?: LinkType
}
