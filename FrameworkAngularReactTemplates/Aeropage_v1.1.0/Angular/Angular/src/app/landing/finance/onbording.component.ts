import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-onbording',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: ` <div class="grid items-center gap-6 lg:grid-cols-2">
    <div>
      <div class="max-w-2xl">
        <span
          class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >Smooth Onboarding</span
        >
        <h2 class="mt-4 text-4xl font-medium text-default-950">
          Effortless Integrations for a Quick Start
        </h2>
        <p class="mt-5 text-base">
          Link Vault with your current financial technology stack to simplify
          data comprehension and decision-making.
        </p>
      </div>

      <div class="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
        <div class="rounded-xl border border-default-200 p-10">
          <img src="assets/images/brand/1.png" alt="" />
        </div>
        <div class="rounded-xl border border-default-200 p-10">
          <img src="assets/images/brand/2.png" alt="" />
        </div>
        <div class="rounded-xl border border-default-200 p-10">
          <img src="assets/images/brand/3.png" alt="" />
        </div>
        <div class="rounded-xl border border-default-200 p-10">
          <img src="assets/images/brand/4.png" alt="" />
        </div>
        <div class="rounded-xl border border-default-200 p-10">
          <img src="assets/images/brand/5.png" alt="" />
        </div>
        <div class="rounded-xl border border-default-200 p-10">
          <img src="assets/images/brand/6.png" alt="" />
        </div>
      </div>
    </div>

    <div class="relative lg:mb-0">
      <div class="relative h-full">
        <img
          src="assets/images/landing/finance/img-6.jpg"
          class="mx-auto h-full rounded-xl"
          alt=""
        />
      </div>
      <div class="absolute inset-x-0 -bottom-14 hidden sm:block">
        <img
          src="assets/images/landing/finance/img-7.png"
          class="h-full rounded-xl"
          alt=""
        />
      </div>
    </div>
    <!-- col End -->
  </div>`,
  styles: ``,
})
export class OnbordingComponent {}
