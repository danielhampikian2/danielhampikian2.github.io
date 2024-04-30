import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-services',
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
        >Our Services</span
      >
      <h2 class="mt-4 text-4xl/tight font-medium text-default-950">
        Marketing Solutions
      </h2>
      <p class="mt-5 text-base">
        The marketing mix symbolizes the fundamental instruments that marketers
        can employ to introduce their products or services to the market.
      </p>
    </div>

    <div class="border border-default-200">
      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        <div class="border-b border-default-200 p-6 md:border-e xl:border-0">
          <div class="mx-auto">
            <lucide-angular
              name="file-text"
              class="inline-block size-12 text-default-950"
            ></lucide-angular>
          </div>
          <h2 class="mt-5 text-2xl font-medium text-default-950">
            Media Relations
          </h2>
          <p class="mt-5 text-base">
            Price need not be exclusively monetary; it can also encompass what
            is traded for the product or services, including energy or any
            sacrifices consumers make to acquire them.
          </p>

          <ul role="list" class="text-default-white -ms-3 mb-3 mt-4 text-sm">
            <li class="flex items-center gap-2 py-1">
              <!-- svg icon -->
              <lucide-angular
                name="dot"
                class="inline-block size-8 stroke-primary"
              ></lucide-angular>
              <span class="text-base text-default-950">Seasonal Campaigns</span>
            </li>
            <li class="flex items-center gap-2 py-1">
              <!-- svg icon -->
              <lucide-angular
                name="dot"
                class="inline-block size-8 stroke-primary"
              ></lucide-angular>
              <span class="text-base text-default-950">Digital Marketing</span>
            </li>
            <li class="flex items-center gap-2 py-1">
              <!-- svg icon -->
              <lucide-angular
                name="dot"
                class="inline-block size-8 stroke-primary"
              ></lucide-angular>
              <span class="text-base text-default-950">Sponsorships</span>
            </li>
          </ul>
          <!-- list End -->

          <a
            href="javascript:void(0);"
            class="group text-lg font-medium text-default-950"
            >Read More
            <lucide-angular
              name="move-right"
              class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
            ></lucide-angular>
          </a>
        </div>
        <!-- col End -->

        <div class="border-b border-default-200 p-6 xl:border-x xl:border-b-0">
          <div class="mx-auto">
            <lucide-angular
              name="boxes"
              class="inline-block size-12 text-default-950"
            ></lucide-angular>
          </div>
          <h2 class="mt-5 text-2xl font-medium text-default-950">
            Marketing Consultancy
          </h2>
          <p class="mt-5 text-base">
            The product facets of marketing involve the specifications of the
            relevant products, goods, or services, and their alignment with the
            needs and desires of the end-users.
          </p>

          <ul role="list" class="text-default-white -ms-3 mb-3 mt-4 text-sm">
            <li class="flex items-center gap-2 py-1">
              <!-- svg icon -->
              <lucide-angular
                name="dot"
                class="inline-block size-8 stroke-primary"
              ></lucide-angular>
              <span class="text-base text-default-950"
                >Search Engine Optimization</span
              >
            </li>
            <li class="flex items-center gap-2 py-1">
              <!-- svg icon -->
              <lucide-angular
                name="dot"
                class="inline-block size-8 stroke-primary"
              ></lucide-angular>
              <span class="text-base text-default-950"
                >Strategic Marketing</span
              >
            </li>
            <li class="flex items-center gap-2 py-1">
              <!-- svg icon -->
              <lucide-angular
                name="dot"
                class="inline-block size-8 stroke-primary"
              ></lucide-angular>
              <span class="text-base text-default-950">Collaborations</span>
            </li>
          </ul>
          <!-- list End -->
          <a
            href="javascript:void(0);"
            class="group text-lg font-medium text-default-950"
            >Read More
            <lucide-angular
              name="move-right"
              class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
            ></lucide-angular>
          </a>
        </div>
        <!-- col End -->

        <div class="p-6">
          <div class="mx-auto">
            <lucide-angular
              name="rocket"
              class="inline-block size-12 text-default-950"
            ></lucide-angular>
          </div>
          <h2 class="mt-5 text-2xl font-medium text-default-950">
            Online Advertising
          </h2>
          <p class="mt-5 text-base">
            This pertains to how the product reaches the customer, including
            intermediaries such as wholesalers and retailers who facilitate
            convenient access to products or services.
          </p>

          <ul role="list" class="text-default-white -ms-3 mb-3 mt-4 text-sm">
            <li class="flex items-center gap-2 py-1">
              <!-- svg icon -->
              <lucide-angular
                name="dot"
                class="inline-block size-8 stroke-primary"
              ></lucide-angular>
              <span class="text-base text-default-950"
                >Experiential Marketing</span
              >
            </li>
            <li class="flex items-center gap-2 py-1">
              <!-- svg icon -->
              <lucide-angular
                name="dot"
                class="inline-block size-8 stroke-primary"
              ></lucide-angular>
              <span class="text-base text-default-950">Event Marketing</span>
            </li>
            <li class="flex items-center gap-2 py-1">
              <!-- svg icon -->
              <lucide-angular
                name="dot"
                class="inline-block size-8 stroke-primary"
              ></lucide-angular>
              <span class="text-base text-default-950">Seasonal Campaigns</span>
            </li>
          </ul>
          <!-- list End -->
          <a
            href="javascript:void(0);"
            class="group text-lg font-medium text-default-950"
            >Read More
            <lucide-angular
              name="move-right"
              class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
            ></lucide-angular>
          </a>
        </div>
        <!-- col End -->
      </div>
      <!-- grid End -->
    </div>
  `,
  styles: ``,
})
export class ServicesComponent {}
