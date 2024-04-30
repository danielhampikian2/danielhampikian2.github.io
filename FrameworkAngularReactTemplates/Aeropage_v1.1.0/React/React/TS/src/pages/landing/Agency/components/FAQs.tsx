import { LuChevronUp } from "react-icons/lu"

import agency11 from '@/assets/images/landing/agency/img-11.jpg'
import agency12 from '@/assets/images/landing/agency/img-12.jpg'
import { faqContents } from "../data"
import { cn } from "@/utils"

const FAQs = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our FAQ</span>
            <h2 className="text-3xl font-medium capitalize text-default-950 my-4">Frequently Asked Questions ?</h2>
          </div>
        </div>
        <div className="relative">
          <div className="hidden lg:block">
            <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-start-10 before:-z-10 before:rotate-180 before:bg-[url('../images/landing/agency/dot.svg')] after:w-24 after:h-24 after:absolute after:-bottom-10 after:-end-10 after:-z-10 after:bg-[url('../images/landing/agency/dot.svg')]" />
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 lg:gap-16 gap-8 items-center">
            <div className="lg:pb-20">
              <div className="hs-accordion-group space-y-4">
                {faqContents.map((faq, idx) => {
                  return (
                    <div key={idx} className={cn("hs-accordion border border-default-200 bg-default-50  rounded-lg overflow-hidden", { active: idx == 0 })} id={`faq-${idx}`}>
                      <button className="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-default-950 transition-all" aria-controls={`faq-accordion-${idx}`}>
                        <h5 className="text-base font-medium flex">
                          {faq.title}
                        </h5>
                        <LuChevronUp className="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180" />
                      </button>
                      <div id={`faq-accordion-${idx}`} className={cn("hs-accordion-content w-full overflow-hidden transition-[height] duration-300", { hidden: idx != 0 })} aria-labelledby={`faq-${idx}`}>
                        <div className="px-6 pb-4 pt-0">
                          <p className="text-sm">{faq.description}</p>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div>
              <div className="-z-10 relative">
                <img src={agency11} className="lg:h-72 h-full rounded-md" />
              </div>
              <div className="-mt-28 xl:block hidden text-end">
                <div className="inline-block bg-default-100 dark:bg-default-50 p-2 rounded-md ms-auto text-end">
                  <img src={agency12} className="ms-auto rounded" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs