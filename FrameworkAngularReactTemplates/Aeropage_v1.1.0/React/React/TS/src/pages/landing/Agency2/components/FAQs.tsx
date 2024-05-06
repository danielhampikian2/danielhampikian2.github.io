import { cn } from "@/utils"
import { faqContent } from "../data"
import { LuChevronUp } from "react-icons/lu"

import agencyImg from '@/assets/images/landing/agency-2/4.svg'

const FAQs = () => {
  return (
    <section id="faq" className="lg:py-20 py-10">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our FAQ</span>
            <h2 className="text-3xl font-medium capitalize text-default-950 my-4">Frequently Asked Questions ?</h2>
          </div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center">
          <div>
            <img src={agencyImg} />
          </div>
          <div className="lg:pb-20">
            <div className="hs-accordion-group space-y-4">
              {faqContent.map((faq, idx) => {
                return (
                  <div key={idx} className={cn("hs-accordion border border-default-200 rounded-lg overflow-hidden", { "active": idx == 0 })} id="faq-1">
                    <button className="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-default-950 transition-all" aria-controls="faq-accordion-1">
                      <h5 className="text-base font-medium flex">
                        {faq.title}
                      </h5>
                      <LuChevronUp className="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180" />
                    </button>
                    <div id="faq-accordion-1" className={cn("hs-accordion-content w-full overflow-hidden transition-[height] duration-300", { "hidden": idx != 0 })} aria-labelledby="faq-1">
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-sm">{faq.description}</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQs