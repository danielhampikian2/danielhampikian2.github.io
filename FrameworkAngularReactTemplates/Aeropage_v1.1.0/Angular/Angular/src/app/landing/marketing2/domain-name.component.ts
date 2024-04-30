import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-domain-name',
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
    <div
      class="rounded-lg bg-[url('../images/landing/marketing-2/mbg-1.png')] bg-cover bg-no-repeat"
    >
      <div
        class="bg-[url(../images/landing/marketing-2/mbg-2.png)] bg-cover bg-no-repeat px-6 py-20"
      >
        <div class="mx-auto max-w-2xl text-center">
          <span
            class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
            >Domain names</span
          >
          <h2 class="mt-5 text-3xl font-medium text-default-950 md:text-4xl">
            Stay updated with our weekly newsletter.
          </h2>
          <p class="mt-6 text-base text-default-950">
            Nunc egestas, augue at pellentesque laoreet, felis eros vehicula
            leo, at malesuada velit leo quis pede.
          </p>
          <form class="mx-auto mt-6 max-w-2xl space-y-2">
            <div class="relative">
              <input
                type="email"
                id="subcribe"
                class="h-12 w-full rounded-md border-default-200 bg-default-50 py-4 pe-14 ps-4 text-default-950 focus:border-default-200 focus:ring-0"
                placeholder="Type Your Email"
                name="email"
              />
              <button
                type="submit"
                class="absolute end-[6px] top-[6px] inline-flex h-9 items-center justify-center gap-2 px-3"
              >
                <lucide-angular
                  name="search"
                  class="size-6 text-default-950"
                ></lucide-angular>
              </button>
              <small class="text-default-700"
                >By submitting the form, you acknowledge and agree to our Terms
                & Conditions and Privacy Policy.</small
              >
            </div>
          </form>
          <!-- form End -->
        </div>
        <!-- </div>
    </div> -->
      </div>
    </div>
  `,
  styles: ``,
})
export class DomainNameComponent {}
