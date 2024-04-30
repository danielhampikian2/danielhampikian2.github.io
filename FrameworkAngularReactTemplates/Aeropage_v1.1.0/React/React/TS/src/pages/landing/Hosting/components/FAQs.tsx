import { LuChevronUp } from "react-icons/lu"
import { faqContent } from "../data"
import { cn } from "@/utils"

const FAQs = () => {
  return (
    <section id="faq" className="py-20">
      <div className="container">
        <div className="max-w-xl mx-auto text-center mb-12">
          <h2 className="md:text-4xl text-3xl font-medium text-default-950">Frequently Asked Questions ?</h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="hs-accordion-group space-y-4">
            {faqContent.map((faq, idx) => {
              return (
                <div key={idx} className="relative w-full lg:w-full z-20">
                  <div className={cn("hs-accordion border border-default-200 hs-accordion-active:translate-x-2 hs-accordion-active:-translate-y-2 transition-all duration-500 bg-white overflow-hidden dark:bg-default-50", { "active": idx == 0 })} id="faq-1">
                    <button className="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-default-950 transition-all" aria-controls="faq-accordion-1">
                      <h5 className="text-xl font-medium">
                        {faq.title}
                      </h5>
                      <LuChevronUp className="h-6 w-6 stroke-default-950 transition-all duration-500 hs-accordion-active:-rotate-180" />
                    </button>
                    <div id="faq-accordion-1" className={cn("hs-accordion-content w-full overflow-hidden transition-[height] duration-300", { "hidden": idx != 0 })} aria-labelledby="faq-1">
                      <div className="px-6 pb-4 pt-0">
                        <p className="text-base">{faq.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute bg-default-950 h-full left-0 top-0 w-full -z-10" />
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>

  )
}

export default FAQs