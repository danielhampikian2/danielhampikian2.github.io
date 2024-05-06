import agency3 from '@/assets/images/landing/agency/img-3.jpg'
import agency4 from '@/assets/images/landing/agency/img-4.jpg'
import agency5 from '@/assets/images/landing/agency/img-5.jpg'
import { LuArrowUpRight, LuComponent, LuLayers } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section id="about" className="lg:py-20 py-10">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">About</span>
            <h2 className="text-4xl font-medium capitalize text-default-950 my-4">About Us</h2>
          </div>
        </div>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-x-16 gap-y-10">
          <div className="grid sm:grid-cols-2 gap-6 items-center">
            <div className="space-y-6">
              <div>
                <img src={agency3} className="max-w-full h-full rounded-lg" />
              </div>
              <div>
                <img src={agency4} className="max-w-full h-full rounded-lg" />
              </div>
            </div>
            <div>
              <img src={agency5} className="max-w-full h-full rounded-lg" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-medium text-default-950">The Best of Product Your Business</h2>
            <div className="flex  justify-center gap-6 mt-10">
              <div>
                <LuComponent  className="h-10 w-10 text-default-950" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-default-950">High Standerd</h2>
                <p className="text-base text-default-800 mt-4">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <div className="flex justify-center gap-6 my-10">
              <div>
                <LuLayers className="h-10 w-10 text-default-950" />
              </div>
              <div>
                <h2 className="text-xl font-medium text-default-950">Ease of Communication</h2>
                <p className="text-base text-default-800 mt-4">Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
            </div>
            <Link to="" className="inline-flex justify-center gap-2 border border-default-200 text-default-950 py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all duration-500">View All Our News
              <LuArrowUpRight  className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About