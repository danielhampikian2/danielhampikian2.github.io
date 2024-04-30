import creative2 from '@/assets/images/landing/creative/img-2.jpg';
import creative7 from '@/assets/images/landing/creative/img-7.jpg';
import { faqContent } from '../data';
import { LuChevronUp, LuHelpCircle } from 'react-icons/lu';
import { cn } from '@/utils';

const FAQs = () => {
  return (
    <section className="py-10 lg:py-20" id="faq">
      <div className="container">
        <div className="flex items-end justify-between mb-10">
          <div className="max-w-2xl mx-auto text-center">
            <span className="py-1 px-3 rounded-md text-xs font-medium uppercase tracking-wider border border-primary bg-primary/20 text-primary">Our FAQ</span>
            <h2 className="text-3xl font-medium capitalize text-default-950 my-4">Frequently Asked Questions ?</h2>
          </div>
        </div>
        <div className="relative">
          <div className="hidden lg:block">
            <div className="before:w-24 before:h-24 before:absolute before:-top-10 before:-start-10 before:bg-[url('../images/other/dot.svg')]" />
            <div className="after:w-24 after:h-24 after:absolute after:-bottom-10 after:-end-10 after:bg-[url('../images/other/dot.svg')]" />
          </div>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 items-center">
            <div>
              <div className="z-10 relative">
                <img src={creative2} className="lg:h-72 h-full shadow rounded-md" />
              </div>
              <div className="-mt-28 xl:block hidden">
                <img src={creative7} className="h-72 shadow rounded-md ms-auto" />
              </div>
            </div>
            <div>
              <div className="hs-accordion-group space-y-4">
                {faqContent.map((faq, idx) => {
                  return (
                    <div key={idx} className={cn("hs-accordion border border-default-200 bg-default-50 backdrop-blur-3xl rounded-lg overflow-hidden", { "active": idx == faqContent.length - 1 })} id={`faq-${idx}`} >
                      <button className="hs-accordion-toggle capitalize px-6 py-4 inline-flex items-center justify-between gap-x-3 w-full text-left text-default-950 transition-all" aria-controls={`faq-${idx}`}>
                        <h5 className="text-base font-medium flex">
                          <LuHelpCircle className="h-5 w-5 stroke-default-950 align-middle me-3" />
                          {faq.title}
                        </h5>
                        <LuChevronUp className="h-4 w-4 transition-all duration-500 hs-accordion-active:-rotate-180" />
                      </button>
                      <div id={`faq-${idx}`} className={cn("hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300", { hidden: idx != 0 })} aria-labelledby={`faq-${idx}`}>
                        <div className="px-6 pb-4 pt-0">
                          <p className="text-sm  mb-2">
                            {faq.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section >
  );
};

export default FAQs;