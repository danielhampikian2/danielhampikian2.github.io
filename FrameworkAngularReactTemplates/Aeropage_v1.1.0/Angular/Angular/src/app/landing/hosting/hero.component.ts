import { Component } from '@angular/core'

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [],
  template: `
    <!-- Hero Section Start -->

    <div class="grid grid-cols-1 gap-6 xl:grid-cols-2">
      <div>
        <span
          class="truncate border border-default-200 px-3 py-2 text-xs text-default-950 md:text-base"
          >Limited-time offer until Friday: $1.99 per month</span
        >
        <h2
          class="mt-5 text-4xl font-medium text-default-950 md:text-6xl/tight"
        >
          Place your trust in the world's no.1 web hosting provider.
        </h2>
        <p class="my-6 text-base">
          Already have a website? Revive it with our industry-leading load
          times.
        </p>
        <div class="flex items-center gap-6 pt-4">
          <div class="relative z-20 w-60">
            <div class="group">
              <div
                class="w-full transition-all duration-500 group-hover:-translate-y-2 group-hover:translate-x-2"
              >
                <a
                  class="flex h-[68px] items-center justify-center bg-primary p-6 text-white transition-all duration-200 md:text-xl"
                  href="javascript:void(0);"
                >
                  $3.95 per month
                </a>
              </div>
              <div
                class="absolute left-0 top-0 -z-10 h-full w-full bg-default-950"
              ></div>
            </div>
          </div>
        </div>
        <!-- flex End -->
      </div>
      <!-- col End -->

      <div>
        <img src="assets/images/landing/hosting/4.svg" alt="" />
      </div>
      <!-- col End -->
    </div>
    <!-- grid End -->
  `,
  styles: ``,
})
export class HeroComponent {}
