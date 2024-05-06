import { LuArrowRight, LuMoveRight } from "react-icons/lu"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <div>
          <div className="flex items-end justify-center mb-10">
            <div className="max-w-md mx-auto text-center">
              <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Services</span>
              <h2 className="text-3xl font-medium capitalize text-default-950 mt-4">Highlighted Services</h2>
            </div>
          </div>
          <div className="rounded-md border border-default-200 bg-white dark:bg-default-50">
            <div className="grid 2xl:grid-cols-2">
              <div className="divide-y divide-default-200">
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-default-950">Brand Development Services</h3>
                  <div>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all duration-300 cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-default-50 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-default-950">Digital Product Development</h3>
                  <div>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all duration-300 cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-default-50 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-default-950">Media Strategy</h3>
                  <div>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all duration-300 cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-default-50 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="2xl:border-s 2xl:border-t-0 border-t border-default-200 divide-y divide-default-200">
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-default-950">Marketing Services</h3>
                  <div>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all duration-300 cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-default-50 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-default-950">Information Technology Consulting</h3>
                  <div>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all duration-300 cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-default-50 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
                <div className="p-6 flex items-center justify-between">
                  <h3 className="text-2xl font-medium text-default-950">Brand Identity Services</h3>
                  <div>
                    <div className="h-12 w-12 rounded-md flex items-center justify-center transition-all duration-300 cursor-pointer border border-default-200 text-default-950 hover:text-primary bg-default-50 hover:bg-white">
                      <LuMoveRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-7">
            <Link to="" className="inline-flex items-center justify-center gap-2 border border-default-200 hover:border-primary backdrop-blur-3xl text-default-950 py-2 px-8 rounded-md hover:bg-primary hover:text-white transition-all">Get Solution
              <LuArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services