import backgroundImg from '@/assets/images/landing/marketing-2/bg-2.png'
import backgroundDarkImg from '@/assets/images/landing/marketing-2/bg-2-dark.jpg'

import marketing1 from '@/assets/images/landing/marketing-2/img-1.jpg'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section id="home" className="py-[164px] relative overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <img src={backgroundImg} className="dark:hidden h-full w-full" />
        <img src={backgroundDarkImg} className="hidden dark:block h-full w-full" />
      </div>
      <div className="container">
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-6 items-center">
            <div className="max-w-md mx-auto text-center lg:ms-0 lg:text-start">
              <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">startups Marketing</span>
              <h2 className="md:text-5xl/tight text-4xl font-medium text-default-950 my-5">Global Marketing Consulting Firm</h2>
              <p className="text-base mb-10">We are a worldwide marketing consultancy providing innovative solutions to our clientele.</p>
              <Link to="" className="px-6 py-3 rounded-md text-white bg-primary hover:bg-primary-700 transition-all duration-300">Reach Out to Us</Link>
            </div>
            <div>
              <div className="relative">
                <img src={marketing1} className="rounded-3xl mx-auto" />
                <div className="hidden xl:block">
                  <div className="absolute top-10 -start-52">
                    <div className="inline-block">
                      <div className="rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80">
                        <div className="max-w-sm text-center px-4 py-4">
                          <p className="text-base text-default-950">Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-auto bottom-20 -end-40">
                    <div>
                      <div className="inline-block rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80">
                        <div className="py-3 px-5">
                          <h5 className="text-base font-medium">Marketing Consulting</h5>
                        </div>
                      </div>
                    </div>
                    <div className="my-2">
                      <div className="inline-block rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80">
                        <div className="py-3 px-5">
                          <h5 className="text-base font-medium">Social Media Marketing</h5>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="inline-block rounded-full border border-default-200 bg-white/80 shadow backdrop-blur-lg dark:bg-black/80">
                        <div className="py-3 px-5">
                          <h5 className="text-base font-medium">Search Engine Optimization</h5>
                        </div>
                      </div>
                    </div>
                  </div>
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