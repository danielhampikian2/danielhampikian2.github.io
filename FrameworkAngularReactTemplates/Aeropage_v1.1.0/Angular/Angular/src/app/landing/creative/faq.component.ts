import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <!-- Start Faq -->
    <section class="py-10 lg:py-20" id="faq">
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
        <!-- flex End -->

        <div class="relative">
          <div class="hidden lg:block">
            <div
              class="before:absolute before:-start-10 before:-top-10 before:h-24 before:w-24 before:bg-[url('../images/other/dot.svg')]"
            ></div>
            <div
              class="after:absolute after:-bottom-10 after:-end-10 after:h-24 after:w-24 after:bg-[url('../images/other/dot.svg')]"
            ></div>
          </div>

          <div class="grid grid-cols-1 items-center gap-6 lg:grid-cols-2">
            <div>
              <div class="relative z-10">
                <img
                  src="assets/images/landing/creative/img-2.jpg"
                  class="h-full rounded-md shadow lg:h-72"
                  alt=""
                />
              </div>
              <div class="-mt-28 hidden xl:block">
                <img
                  src="assets/images/landing/creative/img-7.jpg"
                  class="ms-auto h-72 rounded-md shadow"
                  alt=""
                />
              </div>
            </div>
            <!-- col End -->

            <div>
              <div class="hs-accordion-group space-y-4">
                <div
                  class="hs-accordion overflow-hidden rounded-lg border border-default-200 bg-default-50 backdrop-blur-3xl"
                  id="faq-2"
                >
                  <button
                    class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                    aria-controls="faq-2"
                  >
                    <h5 class="flex text-base font-medium">
                      <lucide-angular
                        name="help-circle"
                        class="me-3 size-5 stroke-default-950 align-middle"
                      ></lucide-angular>
                      How do you stay updated with the latest trends in digital
                      marketing?
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
                      <p class="mb-2 text-sm">
                        I regularly participate in industry webinars, attend
                        conferences, and subscribe to leading digital marketing
                        publications.
                      </p>
                      <p class="text-sm">
                        Duis leo. Sed fringilla mauris sit amet nibh.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="hs-accordion overflow-hidden rounded-lg border border-default-200 bg-default-50 backdrop-blur-3xl"
                  id="faq-3"
                >
                  <button
                    class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                    aria-controls="faq-3"
                  >
                    <h5 class="flex text-base font-medium">
                      <lucide-angular
                        name="help-circle"
                        class="me-3 size-5 stroke-default-950 align-middle"
                      ></lucide-angular>
                      Can you provide examples of successful projects you've
                      worked on?
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
                      <p class="mb-2 text-sm">
                        Certainly! I have a portfolio section on my website
                        where you can find detailed case studies of some of my
                        most successful projects. These case studies include
                        data-driven results and client testimonials to give you
                        a clear picture of my capabilities and achievements.
                      </p>
                      <p class="text-sm">
                        Nullam dictum felis eu pede mollis pretium. Integer
                        tincidunt. Cras dapibus.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="hs-accordion overflow-hidden rounded-lg border border-default-200 bg-default-50 backdrop-blur-3xl"
                  id="faq-2"
                >
                  <button
                    class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                    aria-controls="faq-2"
                  >
                    <h5 class="flex text-base font-medium">
                      <lucide-angular
                        name="help-circle"
                        class="me-3 size-5 stroke-default-950 align-middle"
                      ></lucide-angular>
                      How do you measure the success of a digital marketing
                      campaign?
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
                      <p class="mb-2 text-sm">
                        I adhere to industry-standard security practices and use
                        secure tools and platforms for data handling and
                        communication. Your data is treated with the utmost
                        confidentiality and is only used for the purposes of our
                        digital marketing projects.
                      </p>
                      <p class="text-sm">
                        Duis leo. Sed fringilla mauris sit amet nibh.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  class="hs-accordion active overflow-hidden rounded-lg border border-default-200 bg-default-50 backdrop-blur-3xl"
                  id="faq-1"
                >
                  <button
                    class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                    aria-controls="faq-accordion-1"
                  >
                    <h5 class="flex text-base font-medium">
                      <lucide-angular
                        name="help-circle"
                        class="me-3 size-5 stroke-default-950 align-middle"
                      ></lucide-angular>
                      How can I get in touch with you to discuss a potential
                      project Design?
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
                      <p class="mb-2 text-sm">
                        Molestie at id integet venenatis, fermentum luctus.
                        Ullamcorper, ac morbi augue laoreet aenean sit faucibus
                        scelerisque. Interdum risus sagittis faucibus pharetra.
                        Faucibus sed consectetur mattis nunc, feugiat.
                      </p>
                      <p class="text-sm">
                        Nullam dictum felis eu pede mollis pretium. Integer
                        tincidunt. Cras dapibus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- col End -->
          </div>
          <!-- grid End -->
        </div>
      </div>
      <!-- container End -->
    </section>
  `,
  styles: ``,
})
export class FaqComponent {}
