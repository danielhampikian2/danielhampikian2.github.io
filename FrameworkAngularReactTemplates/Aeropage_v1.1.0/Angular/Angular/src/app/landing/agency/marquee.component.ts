import { Component } from '@angular/core'

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [],
  template: `
    <!-- Start marq -->
    <section class="lg:pb-10">
      <div
        class="relative m-auto flex gap-28 overflow-hidden border border-default-200 py-6"
      >
        <div
          class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28"
        >
          <div class="py-2">
            <h2 class="text-4xl font-medium text-default-950">
              UI-UX Experience
            </h2>
          </div>
          <div class="py-2">
            <h2 class="text-4xl font-medium text-default-950">
              Web Development
            </h2>
          </div>
          <div class="py-2">
            <h2 class="text-4xl font-medium text-default-950">
              Digital Marketing
            </h2>
          </div>
          <div class="py-2">
            <h2 class="text-4xl font-medium text-default-950">
              Product Design
            </h2>
          </div>
          <div class="py-2">
            <h2 class="text-4xl font-medium text-default-950">
              Mobile Solutions
            </h2>
          </div>
        </div>
        <!-- marquee__group End-->

        <div
          aria-hidden="true"
          class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28"
        >
          <div class="py-2">
            <h2 class="text-4xl font-medium text-default-950">
              UI-UX Experience
            </h2>
          </div>
          <div class="py-2">
            <h2 class="text-4xl font-medium text-default-950">
              Web Development
            </h2>
          </div>
          <div class="py-2">
            <h2 class="text-4xl font-medium text-default-950">
              Digital Marketing
            </h2>
          </div>
          <div class="py-2">
            <h2 class="text-4xl font-medium text-default-950">
              Product Design
            </h2>
          </div>
          <div class="py-2">
            <h2 class="text-4xl font-medium text-default-950">
              Mobile Solutions
            </h2>
          </div>
        </div>
        <!-- marquee__group End-->
      </div>
      <!-- flex End -->
    </section>
    <!-- End marq Section -->
  `,
  styles: ``,
})
export class MarqueeComponent {}
