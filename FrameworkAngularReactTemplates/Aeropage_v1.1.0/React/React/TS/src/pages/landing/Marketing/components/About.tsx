import { LuMoveRight, LuPlay } from "react-icons/lu"
import { Link } from "react-router-dom"
import marketing5 from '@/assets/images/landing/marketing/img-5.jpg'

const About = () => {
  return (
    <>
      <section id="about" className="py-10 lg:py-20 bg-white dark:bg-default-50">
        <div className="grid lg:grid-cols-2 items-center gap-6">
          <div className="relative h-[650px]">
            <div className="absolute inset-0 bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${marketing5})` }}>
              <div className="absolute inset-0 w-full h-full bg-black/2   0" />
            </div>
            <div className="relative h-full">
              <div className="flex items-center justify-center h-full">
                <button className="relative h-20 w-20 flex items-center justify-center gap-2.5 rounded-full text-base font-medium bg-primary text-white transition-all duration-300 ring-4 ring-primary/25 hover:bg-primary" data-hs-overlay="#watchvideomodal">
                  <LuPlay className="h-7 w-7 fill-white" />
                </button>
              </div>
            </div>
          </div>
          <div className="py-10">
            <div className="max-w-lg md:ms-20 px-10">
              <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">About</span>
              <h2 className="text-4xl font-medium text-default-950 mt-5">Our mission is to bridge the gap between business and the digital world.</h2>
              <p className="text-base mt-4">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.</p>
              <div className="group mt-6">
                <Link to="" className="text-default-950 text-lg">Read More
                  <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
                </Link>
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

export default About