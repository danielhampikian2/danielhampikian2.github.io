import { LuSearch } from 'react-icons/lu'

import backgroundImg1 from '@/assets/images/landing/marketing-2/bg-1.png'
import backgroundImg2 from '@/assets/images/landing/marketing-2/bg-2.png'

const DomainNames = () => {
  return (
    <section>
      <div className="container">
        <div className="rounded-lg bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImg2})` }}>
          <div className="py-20 px-6 bg-no-repeat bg-cover" style={{ backgroundImage: `url(${backgroundImg1})` }}>
            <div className="max-w-2xl mx-auto text-center">
              <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Domain names</span>
              <h2 className="md:text-4xl text-3xl font-medium text-default-950 mt-5">Stay updated with our weekly newsletter.</h2>
              <p className="text-base text-default-950 mt-6">Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo, at malesuada velit leo quis pede.</p>
              <form className="max-w-2xl mx-auto space-y-2 mt-6">
                <div className="relative">
                  <input type="email" id="subcribe" className="py-4 ps-4 pe-14 w-full h-12 rounded-md text-default-950 border-default-200 bg-default-50 focus:ring-0 focus:border-default-200" placeholder="Type Your Email" name="email" />
                  <button type="submit" className="inline-flex items-center justify-center gap-2 px-3 absolute top-[6px] end-[6px] h-9">
                    <LuSearch className="h-6 w-6 text-default-950" />
                  </button>
                  <small className="text-default-700">By submitting the form, you acknowledge and agree to our Terms &amp; Conditions and Privacy Policy.</small>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DomainNames