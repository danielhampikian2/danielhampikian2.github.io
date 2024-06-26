import { LuBoxes, LuDot, LuFileText, LuMoveRight, LuRocket } from "react-icons/lu"
import { Link } from "react-router-dom"

const Services = () => {
  return (
    <section id="services" className="py-10 lg:py-20">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-14">
          <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our Services</span>
          <h2 className="text-4xl/tight font-medium text-default-950 mt-4">Marketing Solutions</h2>
          <p className="text-base mt-5">The marketing mix symbolizes the fundamental instruments that marketers can employ to introduce their products or services to the market.</p>
        </div>
        <div className="border border-default-200">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1">
            <div className="p-6 xl:border-0 md:border-e border-b border-default-200">
              <div className="mx-auto">
                <LuFileText className="inline-block h-12 w-12 text-default-950" />
              </div>
              <h2 className="text-2xl font-medium text-default-950 mt-5">Media Relations</h2>
              <p className="text-base mt-5">Price need not be exclusively monetary; it can also encompass what is traded for the product or services, including energy or any sacrifices consumers make to acquire them.</p>
              <ul role="list" className="mt-4 -ms-3 mb-3 text-sm text-default-white">
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">Seasonal Campaigns</span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">Digital Marketing</span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">Sponsorships</span>
                </li>
              </ul>
              <Link to="" className="text-default-950 group text-lg font-medium">Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
            <div className="p-6 xl:border-x xl:border-b-0 border-b border-default-200">
              <div className="mx-auto">
                <LuBoxes className="inline-block h-12 w-12 text-default-950" />
              </div>
              <h2 className="text-2xl font-medium text-default-950 mt-5">Marketing Consultancy</h2>
              <p className="text-base mt-5">The product facets of marketing involve the specifications of the relevant products, goods, or services, and their alignment with the needs and desires of the end-users.</p>
              <ul role="list" className="mt-4 -ms-3 mb-3 text-sm text-default-white">
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">Search Engine Optimization</span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">Strategic Marketing</span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">Collaborations</span>
                </li>
              </ul>
              <Link to="" className="text-default-950 group text-lg font-medium">Read More
                <LuMoveRight className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
            <div className="p-6">
              <div className="mx-auto">
                <LuRocket className="inline-block h-12 w-12 text-default-950" />
              </div>
              <h2 className="text-2xl font-medium text-default-950 mt-5">Online Advertising</h2>
              <p className="text-base mt-5">This pertains to how the product reaches the customer, including intermediaries such as wholesalers and retailers who facilitate convenient access to products or services.</p>
              <ul role="list" className="mt-4 -ms-3 mb-3 text-sm text-default-white">
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">Experiential Marketing</span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">Event Marketing</span>
                </li>
                <li className="flex items-center gap-2 py-1">
                  <LuDot className="inline-block h-8 w-8 stroke-primary" />
                  <span className="text-base text-default-950">Seasonal Campaigns</span>
                </li>
              </ul>
              <Link to="" className="text-default-950 group text-lg font-medium">Read More
                <LuMoveRight  className="group-hover:opacity-100 opacity-0 w-6 h-6 inline-block transition-all duration-500 group-hover:translate-x-2 will-change-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services