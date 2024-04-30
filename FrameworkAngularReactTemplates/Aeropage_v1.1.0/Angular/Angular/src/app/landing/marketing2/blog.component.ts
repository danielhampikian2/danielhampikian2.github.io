import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-blog',
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
    <div class="mx-auto mb-14 max-w-3xl text-center">
      <span
        class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
        >Our Bolg</span
      >
      <h2 class="mt-4 text-4xl/tight font-medium text-default-950">
        Explore Our Blog
      </h2>
      <p class="mt-5 text-lg">
        Discover top-notch marketing resources and stay updated with the latest
        news about our company.
      </p>
    </div>

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div class="overflow-hidden rounded-lg border border-default-200 p-6">
        <div class="group relative overflow-hidden">
          <div class="overflow-hidden rounded-md">
            <img
              src="assets/images/landing/marketing-2/img-11.jpg"
              class="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
              alt=""
            />
          </div>
          <div class="mt-6 flex items-center gap-5">
            <div class="group flex items-center gap-3">
              <lucide-angular
                name="calendar-days"
                class="size-5 text-default-300 transition-all duration-700 group-hover:text-primary"
              ></lucide-angular>
              <p class="text-base text-default-950">February 13, 2022</p>
            </div>
            <div class="group flex items-center gap-3">
              <lucide-angular
                name="message-square"
                class="size-5 text-default-300 transition-all duration-700 group-hover:text-primary"
              ></lucide-angular>
              <p class="text-base text-default-950">Articles</p>
            </div>
          </div>
          <!-- flex End -->
          <h2
            class="mt-4 text-xl font-medium text-default-950 transition-all duration-700 group-hover:underline"
          >
            Steps in Content Marketing to Accelerate Business Growth
          </h2>
          <p class="mt-4 text-base">
            The macro-environment, beyond the control of a firm, encompasses a
            multitude of external factors that operate on a broad scale.
          </p>
        </div>
      </div>
      <!-- col End -->

      <div class="overflow-hidden rounded-lg border border-default-200 p-6">
        <div class="group relative overflow-hidden">
          <div class="overflow-hidden rounded-md">
            <img
              src="assets/images/landing/marketing-2/img-12.jpg"
              class="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
              alt=""
            />
          </div>
          <div class="mt-6 flex items-center gap-5">
            <div class="group flex items-center gap-3">
              <lucide-angular
                name="calendar-days"
                class="size-5 text-default-300 transition-all duration-700 group-hover:text-primary"
              ></lucide-angular>
              <p class="text-base text-default-950">February 11, 2023</p>
            </div>
            <div class="group flex items-center gap-3">
              <lucide-angular
                name="message-square"
                class="size-5 text-default-300 transition-all duration-700 group-hover:text-primary"
              ></lucide-angular>
              <p class="text-base text-default-950">Tutorials</p>
            </div>
          </div>
          <!-- flex End -->
          <h2
            class="mt-4 text-xl font-medium text-default-950 transition-all duration-700 group-hover:underline"
          >
            Effective Content Marketing Strategies for Business Expansion
          </h2>
          <p class="mt-4 text-base">
            The micro-environment, where a firm has more control, usually
            encompasses employees, suppliers, and the media.
          </p>
        </div>
      </div>
      <!-- col End -->

      <div class="overflow-hidden rounded-lg border border-default-200 p-6">
        <div class="group relative overflow-hidden">
          <div class="overflow-hidden rounded-md">
            <img
              src="assets/images/landing/marketing-2/img-5.jpg"
              class="h-full w-full scale-[1.2] transition-all duration-700 group-hover:scale-[1]"
              alt=""
            />
          </div>
          <div class="mt-6 flex items-center gap-5">
            <div class="group flex items-center gap-3">
              <lucide-angular
                name="calendar-days"
                class="size-5 text-default-300 transition-all duration-700 group-hover:text-primary"
              ></lucide-angular>
              <p class="text-base text-default-950">February 28, 2022</p>
            </div>
            <div class="group flex items-center gap-3">
              <lucide-angular
                name="message-square"
                class="size-5 text-default-300 transition-all duration-700 group-hover:text-primary"
              ></lucide-angular>
              <p class="text-base text-default-950">Articles</p>
            </div>
          </div>
          <!-- flex End -->
          <h2
            class="mt-4 text-xl font-medium text-default-950 transition-all duration-700 group-hover:underline"
          >
            Mastering Content Propelling Business Towards Success
          </h2>
          <p class="mt-4 text-base">
            The macro-environment, beyond the control of a firm, encompasses a
            multitude of external factors that operate on a broad scale.
          </p>
        </div>
      </div>
      <!-- col End -->
    </div>
    <!-- grid End -->
  `,
  styles: ``,
})
export class BlogComponent {}
