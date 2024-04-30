import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-advantages',
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
    <section
      class="bg-default-100 bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat py-10 dark:bg-default-50 dark:bg-[url('../images/other/bg-lines-2-dark.png')] lg:py-20"
    >
      <div class="container">
        <div class="grid grid-cols-1 items-center gap-6 xl:grid-cols-2">
          <div>
            <h2 class="text-3xl font-medium text-default-950 md:text-4xl">
              Assisting you in securing a competitive advantage
            </h2>
            <p class="my-5 text-base font-medium text-default-600">
              Placerat nunc amet sapien neque, purus cras. Elementum viverra
              egestas fames ornare sed arcu. Consectetur cras vitae orci.
            </p>
            <a
              href="javascript:void(0);"
              class="inline-flex h-10 items-center justify-center rounded-md bg-primary/20 px-4 text-primary transition-all hover:bg-primary hover:text-white"
            >
              <lucide-angular name="move-right" class="size-6"></lucide-angular>
            </a>
          </div>

          <div class="rounded-lg p-8">
            <div class="rounded-md bg-white p-6 dark:bg-default-100">
              <h3 class="text-2xl font-medium text-default-950">
                Feel free to get in touch with us!
              </h3>
              <p class="mt-3 text-base">
                Placerat nunc amet sapien neque, purus cras. Elementum viverra
                egestas fames ornare sed arcu.
              </p>

              <form class="mt-6 space-y-4">
                <div>
                  <label
                    for="name"
                    class="mb-2 inline-block text-base font-medium text-default-950"
                    >Name</label
                  >
                  <input
                    type="text"
                    id="name"
                    class="h-12 w-full rounded border-default-200 py-4 ps-4 text-default-950 focus:border-default-200 focus:ring-0 dark:bg-default-50"
                    placeholder="Your Name"
                    name="name"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="mb-2 inline-block text-base font-medium text-default-950"
                    >Email</label
                  >
                  <input
                    type="email"
                    id="email"
                    class="h-12 w-full rounded border-default-200 py-4 ps-4 text-default-950 focus:border-default-200 focus:ring-0 dark:bg-default-50"
                    placeholder="Type Your email"
                    name="email"
                  />
                </div>
                <div>
                  <label
                    for="subject"
                    class="mb-2 inline-block text-base font-medium text-default-950"
                    >Subject</label
                  >
                  <input
                    type="text"
                    id="subject"
                    class="h-12 w-full rounded border-default-200 py-4 ps-4 text-default-950 focus:border-default-200 focus:ring-0 dark:bg-default-50"
                    placeholder="Your message subject"
                    name="subject"
                  />
                </div>
                <button class="rounded bg-black px-6 py-2 text-lg text-white">
                  Send
                </button>
              </form>
              <!-- form End -->
            </div>
          </div>
        </div>
        <!-- grid End -->
      </div>
      <!-- container End -->
    </section>
  `,
  styles: ``,
})
export class AdvantagesComponent {}
