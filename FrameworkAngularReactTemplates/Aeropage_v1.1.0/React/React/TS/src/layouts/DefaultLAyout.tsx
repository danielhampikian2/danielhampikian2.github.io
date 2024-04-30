import { type ReactNode, Suspense } from 'react'
import { Preloader } from '@/components'

const DefaultLayout = ({ children }: Readonly<{ children: ReactNode }>) => {

  return (
    <Suspense fallback={<Preloader />}>
      {children}
    </Suspense>
  )
}

export default DefaultLayout