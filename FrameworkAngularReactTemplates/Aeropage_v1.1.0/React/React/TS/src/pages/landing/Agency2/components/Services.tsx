import agency4 from '@/assets/images/landing/agency-2/img-4.jpg'
import { LuChevronRight, LuMoveRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const services = ["Graphic Design", "Web Design", "Digital Marketing", "UI/UX Design"]
const Services = () => {
  return (
    <section id="service" className="lg:py-20 py-10">
      <div className="container">
        <div className="grid xl:grid-cols-2 grid-cols-1 gap-x-10 gap-y-6">
          <div>
            <div className="flex items-end justify-between mb-10">
              <div className="max-w-lg lg:text-start mx-auto xl:ms-0 text-center">
                <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Services</span>
                <p className="text-lg text-default-950 mt-5">We help you to go online and increase your conversion rate Better design for your digital products.</p>
              </div>
            </div>
            <div>
              <div className="max-w-md mx-auto xl:ms-0 border border-default-200 rounded-md">
                <div className="divide-y divide-default-200">
                  {services.map((service, idx) => {
                    return (
                      <div key={idx} className="p-6 flex items-center justify-between">
                        <h3 className="text-2xl font-medium text-default-950">{service}</h3>
                        <div className="h-12 w-12 rounded-full flex items-center justify-center transition-all duration-200 border border-default-200 text-default-950 hover:text-white bg-white/5 hover:bg-primary">
                          <LuChevronRight className="w-6 h-6" />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
          <div className="relative flex flex-col gap-y-6">
            <img src={agency4} className="rounded-xl h-full w-full" />
            <div className="md:absolute top-auto xl:-start-28 md:start-10 md:bottom-10">
              <div className="max-w-sm p-6 bg-default-100 dark:bg-default-50 rounded-lg group">
                <h3 className="text-2xl font-medium text-default-950 mb-3">Development</h3>
                <p className="text-base mb-5">Nam ipsum risus, rutrum vitae, vestibulum eu, molestie vel, lacus. Sed augue ipsum, egestas nec, vestibulum et, malesuada adipiscing, dui. </p>
                <Link to="" className=" text-lg font-medium text-default-950">Read More
                  <LuMoveRight  className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services