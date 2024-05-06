import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-contact',
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
    <!-- Start Contact -->
    <section id="contact" class="py-10 lg:py-20">
      <div class="container">
        <div class="flex flex-wrap items-center justify-around gap-6">
          <div class="text-center">
            <div
              class="mx-auto flex size-20 items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950"
            >
              <lucide-angular name="phone" class="size-10"></lucide-angular>
            </div>
            <h4 class="mt-5 text-xl font-medium text-default-950">Call Me</h4>
            <p class="mt-1 text-base text-default-800">+0088 66956 66</p>
          </div>
          <!-- col End -->

          <div class="text-center">
            <div
              class="mx-auto flex size-20 items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950"
            >
              <lucide-angular name="mail" class="size-10"></lucide-angular>
            </div>
            <h4 class="mt-5 text-xl font-medium text-default-950">Email me</h4>
            <p class="mt-1 text-base text-default-800">Dgnr&#64;gmail.com</p>
          </div>
          <!-- col End -->

          <div class="text-center">
            <div
              class="mx-auto flex size-20 items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950"
            >
              <lucide-angular
                name="line-chart"
                class="size-10"
              ></lucide-angular>
            </div>
            <h4 class="mt-5 text-xl font-medium text-default-950">Flow Me</h4>
            <p class="mt-1 text-base text-default-800">Facebook.com</p>
          </div>
          <!-- col End -->

          <div class="text-center">
            <div
              class="mx-auto flex size-20 items-center justify-center rounded-md border border-default-200 bg-white/5 text-default-950"
            >
              <lucide-angular name="save" class="size-10"></lucide-angular>
            </div>
            <h4 class="mt-5 text-xl font-medium text-default-950">My Work</h4>
            <p class="mt-1 text-base text-default-800">Coderthemes.com</p>
          </div>
          <!-- col End -->
        </div>
        <!-- flex End -->
      </div>
      <!-- container End -->
    </section>
    <!-- End Contact -->
  `,
  styles: ``,
})
export class ContactComponent {}
