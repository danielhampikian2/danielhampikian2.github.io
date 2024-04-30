import marketing10 from '@/assets/images/landing/marketing-2/img-10.jpg'
import { LuCheckCircle2 } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const ActionBox = () => {
  return (
    <section className="py-56 h-full relative">
      <div className="container">
        <div className="absolute inset-0 bg-cover bg-no-repeat" style={{ backgroundImage: `url(${marketing10})` }}>
          <div className="absolute inset-0 w-full h-full bg-black/60" />
        </div>
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-6">
            <div>
              <h2 className="text-4xl font-medium text-white mb-4">Marketing Boost for Your Business</h2>
              <p className="text-lg text-zinc-300 mb-10">The marketing audit is typically carried out by a third party, not an internal member of the organization.</p>
              <Link to="" className="px-6 py-3 rounded-md text-sm text-white bg-primary hover:bg-primary-700 transition-all">Get a Consultation</Link>
              <div className="grid md:grid-cols-2 gap-5 mt-10">
                <div className="flex items-center gap-4">
                  <LuCheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="text-base text-zinc-300">Business-to-Business</p>
                </div>
                <div className="flex items-center gap-4">
                  <LuCheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="text-base text-zinc-300">Business-to-Customer</p>
                </div>
                <div className="flex items-center gap-4">
                  <LuCheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="text-base text-zinc-300">Nonprofit Organization</p>
                </div>
                <div className="flex items-center gap-4">
                  <LuCheckCircle2 className="h-6 w-6 text-primary" />
                  <p className="text-base text-zinc-300">Ecommerce</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ActionBox