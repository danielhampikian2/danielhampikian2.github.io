import { Link } from 'react-router-dom'
import { pricingPlans } from '../data'
import PricingCard from './PricingCard'
import { LuMoveRight } from 'react-icons/lu'

const Pricing = () => {
  return (
    <section id="pricing" className="py-10 lg:py-20">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="md:text-4xl text-3xl font-medium text-default-950">Our Pricing</h2>
        </div>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-10 2xl:px-10">
          {pricingPlans.map((plan, idx) => (
            <PricingCard pricingPlan={plan} key={idx} />
          ))}
          <div className="lg:col-span-3">
            <div className="relative w-full lg:w-full">
              <div className="group">
                <div className="border border-default-200 w-full group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                  <div className="p-6 bg-white dark:bg-default-50">
                    <div className="grid md:grid-cols-3 gap-6">
                      <div className="md:col-span-2">
                        <h5 className="text-2xl font-medium text-default-950">Dedicated</h5>
                        <p className="text-xs uppercase tracking-widest text-default-950 mt-2">For Businesses and large organisations.</p>
                        <p className="w-3/4 text-base/7 font-medium py-5 text-default-600">For advanced security and more flexible contrals,the Enterprise plan helps you extend your design processes enterprise-wide.</p>
                        <div className="flex items-center">
                          <Link to="" className="inline-flex items-center text-default-900 text-lg font-semibold group">Learn more
                            <LuMoveRight  className="group-hover:opacity-100 opacity-0 w-4 h-4 transition-all duration-500 group-hover:translate-x-2" />
                          </Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-4 bg-default-100 text-default-950 p-5">
                          <h2 className="text-5xl font-semibold"><sup className="text-xl">$</sup>79</h2>
                          <div>
                            <p className="text-lg">All users, monthly</p>
                            <p className="text-xs">for Unlimited users</p>
                          </div>
                        </div>
                        <div className="relative w-full lg:w-56 mx-auto mt-5 z-20">
                          <div className="group">
                            <div className="border border-default-200 group-hover:border-transparent w-full group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-500">
                              <div className="flex items-center justify-center h-4 p-6 relative z-10 bg-primary">
                                <Link className="button bg-primary text-white" to="">
                                  Get Started
                                </Link>
                              </div>
                            </div>
                            <div className="absolute bg-default-950 h-full left-0 top-0 w-full -z-10" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute bg-default-950 h-full left-0 top-0 w-full -z-10" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  )
}

export default Pricing