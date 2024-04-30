import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],

  template: ` <div
    class="rounded-lg bg-gradient-to-l from-primary/5 via-primary/0 to-primary/10 bg-cover shadow"
  >
    <div
      class="bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat px-6 py-20"
    >
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="mt-5 text-3xl font-medium text-default-950 md:text-4xl">
          Obtain Your Customizable Financial Survival Plan.
        </h2>
        <p class="mt-6 text-base text-default-950">
          Nunc egestas, augue at pellentesque laoreet, felis eros vehicula leo,
          at malesuada velit leo quis pede.
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
          </div>
        </form>
        <!-- form End -->
      </div>
    </div>
  </div>`,
  styles: ``,
})
export class FormComponent {}
