
import agency10 from '@/assets/images/landing/agency/img-10.jpg'

const Services2 = () => {
  return (
    <section id="serice" className="lg:py-20 py-10">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Services</span>
            <p className="text-lg text-default-800 font-medium mt-5">We help you to go online and increase your conversion rate Better design for your digital products.</p>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
          <div className="relative overflow-hidden -z-10">
            <img src={agency10} className="rounded-md h-full w-full" />
            <div className="absolute inset-0 rounded-md bg-black/40" />
          </div>
          <div className="lg:-ms-20">
            <div className="divide-y divide-default-200 bg-default-50 rounded-md shadow">
              <div className="p-6 flex flex-wrap sm:flex-nowrap items-center gap-6">
                <div>
                  <div className="h-12 w-12 rounded-md flex items-center justify-center  text-xl border border-default-200 text-default-950 bg-white/5">01</div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-default-950">Graphic Design</h3>
                  <p className="text-base mt-3"> Donec venenatis vulputate lorem. Morbi nec metus. Phasellus blandit leo ut odio.</p>
                </div>
              </div>
              <div className="p-6 flex flex-wrap sm:flex-nowrap items-center gap-6">
                <div>
                  <div className="h-12 w-12 rounded-md flex items-center justify-center  text-xl border border-default-200 text-default-950 bg-white/5">02</div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-default-950">Web Design</h3>
                  <p className="text-base mt-3"> Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi. Praesent nec nisl a purus blandit viverra.</p>
                </div>
              </div>
              <div className="p-6 flex flex-wrap sm:flex-nowrap items-center gap-6">
                <div>
                  <div className="h-12 w-12 rounded-md flex items-center justify-center  text-xl border border-default-200 text-default-950 bg-white/5">03</div>
                </div>
                <div>
                  <h3 className="text-2xl font-medium text-default-950">Digital Marketing</h3>
                  <p className="text-base mt-3"> Vestibulum rutrum, mi nec elementum vehicula, eros quam gravida nisl, id fringilla neque ante vel mi.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services2