import { LuArrowUpRight } from "react-icons/lu"
import { Link } from "react-router-dom"
import { useLayoutContext } from "@/context"

import backgroundImg from '@/assets/images/landing/marketing/bg-1.png'
import backgroundDarkImg from '@/assets/images/landing/marketing/bg-1-dark.jpg'

import marketing1 from '@/assets/images/landing/marketing/img-1.jpg'
import marketing2 from '@/assets/images/landing/marketing/img-2.jpg'
import marketing3 from '@/assets/images/landing/marketing/img-3.jpg'

const Hero = () => {
  const { themeMode } = useLayoutContext()
  return (
    <section id="home" className="py-40 relative overflow-hidden flex items-center justify-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${themeMode == "light" ? backgroundImg : backgroundDarkImg})` }}>
      <div className="container">
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="max-w-md mx-auto text-center lg:ms-0 lg:text-start">
              <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-default-300 text-default-900">startups Marketing</span>
              <h2 className="md:text-5xl/tight text-4xl font-medium text-default-900 my-5">Digital marketing the new way.</h2>
              <p className="text-base">We are a creative studio specializing in UI/UX design, development and strategy. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
              <Link to="" className="inline-flex items-center justify-center gap-2 border border-primary text-white py-2 px-6 rounded-md bg-primary/90 hover:text-default-950 hover:bg-primary transition-all duration-300 mt-6">Get Solution
                <LuArrowUpRight className="h-6 w-6" />
              </Link>
            </div>
            <div>
              <div className="flex gap-4 md:gap-6 tilt items-center">
                <div className="flex flex-col gap-4 md:gap-6  w-full">
                  <img src={marketing1} className="h-full w-full rounded-lg object-cover" />
                </div>
                <div className="flex flex-col gap-4 md:gap-6 pb-10 md:pb-16 w-full relative">
                  <img src={marketing2} className="w-full h-40 md:h-[278px] rounded-lg object-cover" />
                  <img src={marketing3} className="w-full h-40 md:h-[278px] rounded-lg object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero