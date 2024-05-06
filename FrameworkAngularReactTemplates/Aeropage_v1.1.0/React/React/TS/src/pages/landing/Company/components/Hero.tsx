import companyHero from '@/assets/images/landing/company/hero-img.png'
import { LuBell } from 'react-icons/lu'
import { Link } from 'react-router-dom'
import { features } from '../data'

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden lg:py-40 py-24 bg-primary/5">
      <div className="container">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 gap-y-12 items-center mb-10">
          <div className="max-w-xl">
            <div className="inline-block pe-5 rounded-full border border-primary/20">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <LuBell className="h-4 w-4 text-default-950" />
                </div>
                <span className="md:text-sm text-xs font-medium text-default-950">Startup Business</span>
              </div>
            </div>
            <h1 className="md:text-4xl/tight text-4xl font-medium text-default-950 max-w-lg my-4">Empowering startups to fuel their business growth</h1>
            <p className="md:text-lg">Eu posuere mi sed purus proin quisque molestie. Ut amet, at amet, velit <br /> nibh arcu eu. Id sem varius malesuada tincidunt sodales.</p>
            <div className="inline-block">
              <Link to="" className="flex items-center justify-center gap-2 py-2 px-6 mt-6 rounded-md text-base font-medium text-white bg-primary transition-all duration-500 hover:bg-primary-300">Get started now</Link>
            </div>
          </div>
          <div>
            <img src={companyHero} />
          </div>
        </div>
        <div className="grid lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => {
            const Icon = feature.icon
            return (
              <div key={idx} className="p-6 rounded-xl sm:text-start text-center border border-primary/20 bg-primary/5">
                <div className="flex sm:justify-start justify-center flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-0">
                  <div className="sm:pe-5">
                    <Icon className="h-10 w-10 text-default-950 mx-auto" />
                  </div>
                  <div className="sm:ps-5 sm:border-s border-primary/20">
                    <h2 className="text-xl font-medium text-default-950">{feature.title}</h2>
                    <p className="text-base mt-3">{feature.description}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Hero