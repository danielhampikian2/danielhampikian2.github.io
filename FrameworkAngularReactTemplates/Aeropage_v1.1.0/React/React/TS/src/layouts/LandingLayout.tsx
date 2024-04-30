import { Preloader } from '@/components'
import { Suspense, lazy, type ReactNode } from 'react'
const Footer = lazy(() => import('@/components/Footer'))

const loading = () => <div />

const LandingLayout = ({ children }: Readonly<{ children: ReactNode }>) => {

  return (
    <>
      <Suspense fallback={<Preloader />}>{children}</Suspense>

      <Suspense fallback={loading()}>
        <Footer />
      </Suspense>
    </>
  )
}

export default LandingLayout