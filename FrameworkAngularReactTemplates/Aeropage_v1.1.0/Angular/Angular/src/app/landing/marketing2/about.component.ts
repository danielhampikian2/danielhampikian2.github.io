import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-about',
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
        >Our About</span
      >
      <h2 class="mt-4 text-4xl/tight font-medium text-default-950">
        Top-Tier Online Marketing Firm Located in New York
      </h2>
      <p class="mt-5 text-base">
        Marketing encompasses the activities, institutions, and procedures aimed
        at generating, conveying, delivering, and exchanging valuable offerings
        for customers, partners, and society as a whole.
      </p>
    </div>

    <div class="rounded-xl border border-default-200">
      <div
        class="grid grid-cols-1 items-center divide-y divide-default-200 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
      >
        <div class="p-8 text-center">
          <h5 class="text-xl font-medium text-default-950">
            "Extremely impressed with the service and the outcomes!"
          </h5>
          <p class="mt-4 text-lg text-default-950">Rated 4.5 on Trustpilot</p>

          <div class="mt-5 flex items-center justify-center gap-1">
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
          </div>
          <!-- flex End -->
        </div>
        <!-- col End -->

        <div class="p-8 text-center">
          <h5 class="text-xl font-medium text-default-950">
            "Outstanding service for precision-targeted lead generation."
          </h5>
          <p class="mt-4 text-lg text-default-950">Rated 4.5 on Trustpilot</p>

          <div class="mt-5 flex items-center justify-center gap-1">
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
          </div>
          <!-- flex End -->
        </div>
        <!-- col End -->

        <div class="p-8 text-center">
          <h5 class="text-xl font-medium text-default-950">
            "I've thoroughly enjoyed my collaboration with Resonance."
          </h5>
          <p class="mt-4 text-lg text-default-950">Rated 4.5 on Trustpilot</p>

          <div class="mt-5 flex items-center justify-center gap-1">
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
            <lucide-angular
              name="star"
              class="size-6 fill-yellow-300 text-yellow-300"
            ></lucide-angular>
          </div>
          <!-- flex End -->
        </div>
        <!-- col End -->
      </div>
      <!-- grid End -->
    </div>

    <div class="mt-10 flex justify-center">
      <a
        href="javascript:void(0);"
        class="inline-flex items-center justify-center gap-2 rounded-md border border-default-200 px-8 py-2 text-default-950 backdrop-blur-3xl transition-all hover:border-primary hover:bg-primary hover:text-white"
        >Read More
        <lucide-angular name="arrow-right" class="size-6"></lucide-angular>
      </a>
    </div>
    <!-- flex End -->
  `,
  styles: ``,
})
export class AboutComponent {}
