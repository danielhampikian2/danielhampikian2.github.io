import { LuPlay } from "react-icons/lu"
import { investmentSteps } from "../data"

const InvestmentSteps = () => {
  return (
    <>
      <section className="py-16 lg:py-32 h-full relative">
        <div className="container">
          <div className="absolute inset-0 bg-cover bg-repeat bg-center bg-[url(../images/landing/marketing-2/img-8.jpg)]">
            <div className="absolute inset-0 w-full h-full bg-black/50" />
          </div>
          <div className="relative">
            <div className="grid sm:grid-cols-3 gap-6 items-center">
              <div className="sm:col-span-2">
                <div className="p-6 rounded-md">
                  <h2 className="text-4xl font-medium text-white text-center">Achieving Success in Three Simple Investment Steps</h2>
                  <div className="grid grid-cols-1 gap-6 mt-10">
                    {investmentSteps.map((step, idx) => {
                      const Icon = step.icon
                      return (
                        <div key={idx} className="p-6 rounded-md bg-white/60 dark:bg-black/60 backdrop-blur-xl">
                          <div className="flex flex-wrap md:flex-nowrap items-center gap-6">
                            <div>
                              <Icon className="h-12 w-12 stroke-primary" />
                            </div>
                            <div>
                              <h2 className="text-2xl font-medium text-default-950">{step.title}</h2>
                              <p className="text-base text-default-950 mt-3">{step.description}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
              <div className="relative h-full">
                <div className="flex items-center justify-center h-full">
                  <button className="relative h-20 w-20 flex items-center justify-center gap-2.5 rounded-full text-base font-medium bg-primary text-white transition-all duration-300 ring-4 ring-primary/25 hover:bg-primary" data-hs-overlay="#watchvideomodal">
                    <LuPlay className="h-7 w-7 fill-current" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div id="watchvideomodal" className="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-xl sm:w-full m-3 sm:mx-auto min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full flex flex-col pointer-events-auto rounded-xl overflow-x-hidden">
            <iframe className="w-full" height={400} src="https://www.youtube.com/embed/NbR-wVOpJwA?si=OlR2e-UItbGilVlu" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      </div>
    </>
  )
}

export default InvestmentSteps