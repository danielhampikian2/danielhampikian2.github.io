import company3 from '@/assets/images/landing/company/img-3.jpg'
import company4 from '@/assets/images/landing/company/img-4.jpg'
import { faqContent } from '../data'
import { cn } from '@/utils'
import { LuChevronUp } from 'react-icons/lu'

const FAQs = () => {
  return (
    <section id="faq" className="py-10 lg:py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our FAQ</span>
            <h2 className="text-3xl font-medium capitalize text-default-950 my-4">Commonly Asked Questions</h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-12 gap-6 items-center">
          <div>
            <div className="hs-accordion-group space-y-4">
              {faqContent.map((faq, idx) => {
                return (
                  <div key={idx} className={cn("hs-accordion border border-default-200 rounded-lg overflow-hidden bg-white dark:bg-default-50", { "active": idx == 0 })} id="faq-1">
                    <button className="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-default-950 transition-all" aria-controls="faq-accordion-1">
                      <h5 className="text-base font-medium flex">
                        {faq.title}
                      </h5>
                      <LuChevronUp className="h-4 w-4 transition-all duration-300 hs-accordion-active:-rotate-180" />
                    </button>
                    <div id="faq-accordion-1" className={cn("hs-accordion-content w-full overflow-hidden transition-[height] duration-300", { "hidden": idx != 0 })} aria-labelledby="faq-1">
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-sm text-default-600">{faq.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div className="relative mb-20 lg:mb-0">
            <div className="relative">
              <img src={company4} className="mx-auto rounded-lg" />
            </div>
            <div className="absolute inset-x-0 -bottom-14 hidden sm:block">
              <img src={company3} className="h-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs