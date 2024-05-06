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
              class="border border-default-200 px-3 py-1 text-xs font-medium uppercase tracking-wider text-default-950"
              >Our FAQ</span
            >
            <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
              Have Questions?
            </h2>
            <p class="text-base">
              Discover solutions to frequently asked questions about booking pet
              portrait sessions, event photography, wildlife destinations, and
              the use of commercial images.
            </p>
          </div>
        </div>
        <!-- flex End -->

        <div class="mx-auto max-w-3xl">
          <div class="hs-accordion-group space-y-4">
            <div
              class="hs-accordion active overflow-hidden border border-primary/20 hs-accordion-active:bg-primary/10"
              id="faq-1"
            >
              <button
                class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                aria-controls="faq-accordion-1"
              >
                <h5 class="text-xl font-medium">
                  How can i book a pet portrait session?
                </h5>
                <lucide-angular
                  name="plus"
                  class="size-6 transition-all duration-300 hs-accordion-active:-rotate-45"
                ></lucide-angular>
              </button>
              <div
                id="faq-accordion-1"
                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-1"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-sm">
                    Booking a pet portrait session is a breeze! Just get in
                    touch with us through our contact page or give us a call.
                    We'll collaborate to determine a convenient date and
                    location for your photoshoot.
                  </p>
                </div>
              </div>
            </div>
            <!-- col End-->

            <div
              class="hs-accordion overflow-hidden border border-primary/20 hs-accordion-active:bg-primary/10"
              id="faq-2"
            >
              <button
                class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                aria-controls="faq-2"
              >
                <h5 class="text-xl font-medium">
                  Can i bring my own pet props or accessories?
                </h5>
                <lucide-angular
                  name="plus"
                  class="size-6 transition-all duration-300 hs-accordion-active:-rotate-45"
                ></lucide-angular>
              </button>
              <div
                id="faq-2"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-2"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-sm">
                    Certainly! We encourage you to bring any special props or
                    accessories that showcase your pet's unique personality. It
                    adds a personal touch to the photos and makes the experience
                    even more memorable.
                  </p>
                </div>
              </div>
            </div>
            <!-- col End-->

            <div
              class="hs-accordion overflow-hidden border border-primary/20 hs-accordion-active:bg-primary/10"
              id="faq-3"
            >
              <button
                class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                aria-controls="faq-3"
              >
                <h5 class="text-xl font-medium">
                  Do you offer photo packages for pet events and celebrations?
                </h5>
                <lucide-angular
                  name="plus"
                  class="size-6 transition-all duration-300 hs-accordion-active:-rotate-45"
                ></lucide-angular>
              </button>
              <div
                id="faq-3"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-3"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-sm">
                    Yes, we have customized photo packages for pet events and
                    celebrations. Whether it's a birthday party or a
                    pet-friendly gathering, we'll be there to capture the joy
                    and excitement of the occasion.
                  </p>
                </div>
              </div>
            </div>
            <!-- col End-->

            <div
              class="hs-accordion overflow-hidden border border-primary/20 hs-accordion-active:bg-primary/10"
              id="faq-3"
            >
              <button
                class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                aria-controls="faq-3"
              >
                <h5 class="text-xl font-medium">
                  What locations do you cover for wildlife photography?
                </h5>
                <lucide-angular
                  name="plus"
                  class="size-6 transition-all duration-300 hs-accordion-active:-rotate-45"
                ></lucide-angular>
              </button>
              <div
                id="faq-3"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-3"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-sm">
                    Our wildlife photography services encompass a wide range of
                    locations, from local wildlife reserves to exotic
                    destinations. Please contact us to discuss your specific
                    interests and preferences, and we'll plan an unforgettable
                    wildlife photography adventure.
                  </p>
                </div>
              </div>
            </div>
            <!-- col End-->

            <div
              class="hs-accordion overflow-hidden border border-primary/20 hs-accordion-active:bg-primary/10"
              id="faq-3"
            >
              <button
                class="hs-accordion-toggle inline-flex w-full items-center justify-between gap-x-3 px-6 py-4 text-left capitalize text-default-950 transition-all"
                aria-controls="faq-3"
              >
                <h5 class="text-xl font-medium">
                  Can you provide images for commercial use?
                </h5>
                <lucide-angular
                  name="plus"
                  class="size-6 transition-all duration-300 hs-accordion-active:-rotate-45"
                ></lucide-angular>
              </button>
              <div
                id="faq-3"
                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                aria-labelledby="faq-3"
              >
                <div class="px-6 pb-4 pt-0">
                  <p class="text-sm">
                    Absolutely! We provide commercial licensing options for our
                    images, enabling you to use them for promotional materials,
                    websites, and other marketing purposes. Just let us know
                    your requirements, and we'll furnish you with the relevant
                    licensing details.
                  </p>
                </div>
              </div>
            </div>
            <!-- col End-->
          </div>
        </div>
        <!-- col End-->
      </div>
      <!-- container End-->
    </section>
    <!-- End faq -->
  `,
  styles: ``,
})
export class FaqComponent {}
