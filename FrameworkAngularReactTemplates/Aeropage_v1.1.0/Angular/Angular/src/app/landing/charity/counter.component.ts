import { Component } from '@angular/core'

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  template: `
    <section
      class="bg-black bg-[url('../images/landing/charity/bg-2.png')] bg-bottom py-20"
    >
      <div class="container">
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div class="text-center">
            <h2 class="text-4xl font-medium text-white">20 Billion</h2>
            <p class="mt-2 text-base text-white/80">Raised to Date</p>
          </div>
          <!-- col End -->

          <div class="text-center">
            <h2 class="text-4xl font-medium text-white">123</h2>
            <p class="mt-2 text-base text-white/80">Countries Impacting</p>
          </div>
          <!-- col End -->

          <div class="text-center">
            <h2 class="text-4xl font-medium text-white">30K+</h2>
            <p class="mt-2 text-base text-white/80">Volunteers</p>
          </div>
          <!-- col End -->

          <div class="text-center">
            <h2 class="text-4xl font-medium text-white">218</h2>
            <p class="mt-2 text-base text-white/80">Successful Projects</p>
          </div>
          <!-- col End -->
        </div>
        <!-- grid End -->
      </div>
      <!-- Container End -->
    </section>
  `,
  styles: ``,
})
export class CounterComponent {}
