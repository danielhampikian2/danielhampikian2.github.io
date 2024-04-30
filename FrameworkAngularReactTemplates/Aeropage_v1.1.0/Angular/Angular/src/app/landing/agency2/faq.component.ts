import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],

  template: `
    <!-- Start Faq -->
    <section id="faq" class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Our FAQ</span
            >
            <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
              Frequently Asked Questions ?
            </h2>
          </div>
        </div>
        <!-- flex End-->

        <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <img src="assets/images/landing/agency-2/4.svg" alt="" />
          </div>
          <!-- col End-->

          <div class="lg:pb-20">
            <div class="hs-accordion-group space-y-4">
              <div
                class="hs-accordion active overflow-hidden rounded-lg border border-default-200"
                id="faq-1"
              >
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                  aria-controls="faq-accordion-1"
                >
                  <h5 class="flex text-base font-medium">
                    How can digital marketing benefit my business?
                  </h5>
                  <lucide-angular
                    name="chevron-up"
                    class="block size-4  transition-all duration-300 hs-accordion-active:hidden hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                  <lucide-angular
                    name="chevron-down"
                    class="hidden size-4 transition-all duration-300 hs-accordion-active:block hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                </button>
                <div
                  id="faq-accordion-1"
                  class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-1"
                >
                  <div class="px-6 pb-4 pt-0">
                    <p class="text-sm">
                      It can increase brand visibility, drive website traffic,
                      generate leads, and ultimately boost sales and revenue.
                    </p>
                  </div>
                </div>
              </div>
              <!-- col End-->

              <div
                class="hs-accordion overflow-hidden rounded-lg border border-default-200"
                id="faq-2"
              >
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                  aria-controls="faq-2"
                >
                  <h5 class="flex text-base font-medium">
                    Do I need to have a large budget for digital marketing?
                  </h5>
                  <lucide-angular
                    name="chevron-up"
                    class="block size-4  transition-all duration-300 hs-accordion-active:hidden hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                  <lucide-angular
                    name="chevron-down"
                    class="hidden size-4 transition-all duration-300 hs-accordion-active:block hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                </button>
                <div
                  id="faq-2"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-2"
                >
                  <div class="px-6 pb-4 pt-0">
                    <p class="text-sm">
                      We work with businesses of various budgets and can create
                      strategies that align with your financial resources while
                      delivering meaningful results.
                    </p>
                  </div>
                </div>
              </div>
              <!-- col End-->

              <div
                class="hs-accordion overflow-hidden rounded-lg border border-default-200"
                id="faq-3"
              >
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                  aria-controls="faq-3"
                >
                  <h5 class="flex text-base font-medium">
                    What services does [Your Digital Agency] offer?
                  </h5>
                  <lucide-angular
                    name="chevron-up"
                    class="block size-4  transition-all duration-300 hs-accordion-active:hidden hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                  <lucide-angular
                    name="chevron-down"
                    class="hidden size-4 transition-all duration-300 hs-accordion-active:block hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                </button>
                <div
                  id="faq-3"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-3"
                >
                  <div class="px-6 pb-4 pt-0">
                    <p class="text-sm">
                      provides a comprehensive range of digital services,
                      including website design and development, digital
                      marketing, search engine optimization
                    </p>
                  </div>
                </div>
              </div>
              <!-- col End-->

              <div
                class="hs-accordion overflow-hidden rounded-lg border border-default-200"
                id="faq-2"
              >
                <button
                  class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                  aria-controls="faq-2"
                >
                  <h5 class="flex text-base font-medium">
                    Can help with content creation and social media management?
                  </h5>
                  <lucide-angular
                    name="chevron-up"
                    class="block size-4  transition-all duration-300 hs-accordion-active:hidden hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                  <lucide-angular
                    name="chevron-down"
                    class="hidden size-4 transition-all duration-300 hs-accordion-active:block hs-accordion-active:-rotate-180"
                  ></lucide-angular>
                </button>
                <div
                  id="faq-2"
                  class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                  aria-labelledby="faq-2"
                >
                  <div class="px-6 pb-4 pt-0">
                    <p class="text-sm">
                      Absolutely! We offer content creation services, including
                      blog posts, social media content, and multimedia assets.
                    </p>
                  </div>
                </div>
              </div>
              <!-- col End-->
            </div>
          </div>
          <!-- col End-->
        </div>
        <!-- grid End-->
      </div>
      <!-- container End-->
    </section>
    <!-- End faq -->
  `,
  styles: ``,
})
export class FaqComponent {}
