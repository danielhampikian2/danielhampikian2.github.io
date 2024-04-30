import finance9 from '@/assets/images/landing/finance/img-9.png'
import { LuCircle, LuMoveRight } from 'react-icons/lu'
import { Link } from 'react-router-dom'

const Feature2 = () => {
  return (
    <section className="py-10 lg:py-20">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <img src={finance9} className="h-full w-full rounded-lg" />
          </div>
          <div>
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Investor ready reporting</span>
            <h2 className="text-4xl/tight font-medium text-default-950 mt-4">Streamline Data Integrations: Simplify finance with Vault</h2>
            <ul role="list" className="mt-6 space-y-2 text-sm text-default-700 -ms-3 ps-6">
              <li className="flex items-center gap-3">
                <LuCircle className="shrink inline-block h-2 w-2 text-primary fill-primary" />
                <span className="grow text-base font-medium">Demonstrate your firm grasp of business finances by having instant access.</span>
              </li>
              <li className="flex items-center gap-3">
                <LuCircle className="shrink inline-block h-2 w-2 text-primary fill-primary" />
                <span className="grow text-base font-medium">Effortlessly collaborate with investors by sharing live reports and models.</span>
              </li>
              <li className="flex items-center gap-3">
                <LuCircle className="shrink inline-block h-2 w-2 text-primary fill-primary" />
                <span className="grow text-base font-medium">Simplify investor collaboration by seamlessly sharing real-time Sheets.</span>
              </li>
            </ul>
            <div className="group mt-5">
              <Link to="" className="inline-flex items-center justify-center gap-2 rounded-full py-2 px-4 bg-primary/20 text-primary text-sm transition-all duration-200 hover:bg-primary hover:text-white">Read More
                <LuMoveRight className="w-6 h-6 inline-block" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Feature2