import { Link } from "react-router-dom"
import { services } from "../data"
import { LuMoveRight } from "react-icons/lu"

import company2 from '@/assets/images/landing/company/img-2.jpg'

const Services = () => {
  return (
    <>
      <section id="services" className="py-10 lg:py-20">
        <div className="container">
          <div className="max-w-xl mx-auto text-center mb-12">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our Services</span>
            <h2 className="md:text-4xl text-3xl font-medium text-default-950 mt-3">Comprehensive Plan</h2>
          </div>
          <div className="grid 2xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            {services.map((service, idx) => {
              const Icon = service.icon
              return (
                <div key={idx} className="bg-default-100 text-center rounded-lg dark:bg-default-50">
                  <div className="p-6">
                    <div className="flex justify-center">
                      <Icon className="h-12 w-12 text-default-950" />
                    </div>
                    <h3 className="md:text-2xl text-xl font-medium text-default-950 mb-4 mt-6">{service.title}</h3>
                    <p className="md:text-base  mb-4">{service.description}</p>
                    <Link to="" className="inline-flex items-center gap-2 text-lg font-medium text-default-950">Read more <LuMoveRight className="h-5 w-5" /></Link>
                  </div>
                </div>
              )
            })}

          </div>
        </div>
      </section>

      <section className="py-10 lg:py-20 bg-default-100 dark:bg-default-50">
        <div className="container">
          <div className="relative z-20">
            <div className="hidden xl:block">
              <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-end-10 before:-z-10 before:bg-[url('../images/landing/company/dot.svg')] after:w-24 after:h-24 after:absolute after:-bottom-10 after:-start-10 after:-z-10 after:bg-[url('../images/landing/company/dot.svg')]" />
            </div>
            <div className="grid xl:grid-cols-2 grid-cols-1 gap-6">
              <div>
                <img src={company2} className="rounded-lg" />
              </div>
              <div>
                <div className="bg-white p-10 dark:bg-default-100 rounded-lg">
                  <h2 className="text-3xl font-medium text-default-950">Transforming Challenges into Profit</h2>
                  <p className="text-base mt-6 text-default-800">Intuition and strategy form the foundation of our research methodology, which we apply to both traditional and digital media.</p>
                  <p className="text-base mt-4 text-default-800">We firmly believe that the human element is vital in initiating any successful project, as it is here that meaningful emotional connections between the company and individuals are cultivated.</p>
                </div>
                <div className="p-9">
                  <div className="flex items-center gap-7">
                    <div className="text-center">
                      <h3 className="text-5xl font-medium text-default-950">200+</h3>
                      <p className="text-base mt-1">Clients served</p>
                    </div>
                    <div className="text-center">
                      <h3 className="text-5xl font-medium text-default-950">95%</h3>
                      <p className="text-base mt-1">Growth rate</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services