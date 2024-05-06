import { Component } from '@angular/core'

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [],
  template: `
    <!-- Start marq -->
    <section class="pb-10 pt-20">
      <div
        class="relative m-auto flex gap-10 overflow-hidden border-y border-default-200 py-8"
      >
        <div
          class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-10"
        >
          <div class="py-3">
            <h2 class="flex text-5xl font-medium text-default-950">
              Built for online marketing
            </h2>
          </div>
          <div class="py-3">
            <h2 class="text-5xl font-medium text-default-950">eCommerce</h2>
          </div>
          <div class="py-3">
            <h2 class="text-5xl font-medium text-default-950">Development</h2>
          </div>
          <div class="py-3">
            <h2 class="text-5xl font-medium text-default-950">Social media</h2>
          </div>
          <div class="py-3">
            <h2 class="text-5xl font-medium text-default-950">Consultation</h2>
          </div>
        </div>
        <!-- marquee__group End -->

        <div
          aria-hidden="true"
          class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-10"
        >
          <div class="py-3">
            <h2 class="flex text-5xl font-medium text-default-950">
              Built for online marketing
            </h2>
          </div>
          <div class="py-3">
            <h2 class="text-5xl font-medium text-default-950">eCommerce</h2>
          </div>
          <div class="py-3">
            <h2 class="text-5xl font-medium text-default-950">Development</h2>
          </div>
          <div class="py-3">
            <h2 class="text-5xl font-medium text-default-950">Social media</h2>
          </div>
          <div class="py-3">
            <h2 class="text-5xl font-medium text-default-950">Consultation</h2>
          </div>
        </div>
        <!-- marquee__group End -->
      </div>
      <!-- flex End -->
    </section>
    <!-- End marq Section -->
  `,
  styles: ``,
})
export class MarqueeComponent {}
