import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-solutions',
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
    <div class="mx-auto mb-14 max-w-xl text-center">
      <span
        class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
        >Business Solutions</span
      >
      <h2 class="mt-4 text-4xl/tight font-medium text-default-950">
        Our Offered Services
      </h2>
      <p class="mt-5 text-base">
        Adaptable layouts and immediate outcomes! Select a pre-designed header
        or craft a personalized layout that precisely aligns with your
        requirements.
      </p>
    </div>

    <!-- Start marq -->
    <div class="relative m-auto flex gap-8 overflow-hidden">
      <div
        class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8"
      >
        @for (item of Solutions; track $index) {
          <div class="w-60 py-5">
            <div
              class="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50"
            >
              <div class="flex justify-center">
                <lucide-angular
                  name="{{ item.icon }}"
                  class="size-10 text-primary"
                ></lucide-angular>
              </div>
              <h4 class="mt-5 text-lg font-medium text-default-950">
                {{ item.title }}
              </h4>
            </div>
          </div>
        }
      </div>
      <!-- marquee__group End-->

      <div
        aria-hidden="true"
        class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-8"
      >
        <div class="w-60 py-5">
          <div
            class="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50"
          >
            <div class="flex justify-center">
              <lucide-angular
                name="newspaper"
                class="size-10 text-primary"
              ></lucide-angular>
            </div>
            <h4 class="mt-5 text-lg font-medium text-default-950">
              Search Engine Optimization
            </h4>
          </div>
        </div>

        <div class="w-60">
          <div
            class="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50"
          >
            <div class="flex justify-center">
              <lucide-angular
                name="folder-kanban"
                class="size-10 text-primary"
              ></lucide-angular>
            </div>
            <h4 class="mt-5 text-lg font-medium text-default-950">
              Social Media Marketing
            </h4>
          </div>
        </div>

        <div class="w-60">
          <div
            class="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50"
          >
            <div class="flex justify-center">
              <lucide-angular
                name="clipboard-pen-line"
                class="size-10 text-primary"
              ></lucide-angular>
            </div>
            <h4 class="mt-5 text-lg font-medium text-default-950">
              E-commerce Solutions
            </h4>
          </div>
        </div>

        <div class="w-60">
          <div
            class="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50"
          >
            <div class="flex justify-center">
              <lucide-angular
                name="store"
                class="size-10 text-primary"
              ></lucide-angular>
            </div>
            <h4 class="mt-5 text-lg font-medium text-default-950">
              Pay-Per-Click Advertising
            </h4>
          </div>
        </div>

        <div class="w-60">
          <div
            class="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50"
          >
            <div class="flex justify-center">
              <lucide-angular
                name="contact-2"
                class="size-10 text-primary"
              ></lucide-angular>
            </div>
            <h4 class="mt-5 text-lg font-medium text-default-950">
              Branding <br />
              Strategy
            </h4>
          </div>
        </div>

        <div class="w-60">
          <div
            class="rounded-xl bg-white p-6 text-center shadow-lg dark:bg-default-50"
          >
            <div class="flex justify-center">
              <lucide-angular
                name="image"
                class="size-10 text-primary"
              ></lucide-angular>
            </div>
            <h4 class="mt-5 text-lg font-medium text-default-950">
              Marketing Copywriting
            </h4>
          </div>
        </div>
      </div>
      <!-- marquee__group End-->
    </div>
    <!-- flex End -->
    <!-- End marq Section -->
  `,
  styles: ``,
})
export class SolutionsComponent {
  Solutions = [
    {
      title: 'Search Engine Optimization',
      icon: 'newspaper',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Social Media Marketing',
      icon: 'folder-kanban',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'E-commerce Solutions',
      icon: 'clipboard-pen-line',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Pay-Per-Click Advertising',
      icon: 'store',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Branding Strategy',
      icon: 'contact-2',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
    {
      title: 'Marketing Copywriting',
      icon: 'image',
      description:
        'Adaptable layouts and immediate outcomes! Select a pre-designed header or craft a personalized layout that precisely aligns with your requirements.',
    },
  ]
}
