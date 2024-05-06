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
  template: ` <div class="bg-default-100 dark:bg-default-50">
    <div
      class="bg-[url('../images/other/bg-lines-2.png')] bg-cover bg-no-repeat px-6 py-20 dark:bg-[url('../images/other/bg-lines-2-dark.png')]"
    >
      <div class="mx-auto text-center">
        <span class="text-sm uppercase text-default-950">Domain names</span>
        <h2 class="mt-5 text-3xl font-medium text-default-950 md:text-4xl">
          Every exceptional website deserves a remarkable name.
        </h2>
        <p class="mt-6 text-base text-default-950">
          Your domain name is the address of your website. While <br />
          .com names are widely favored, consider options like <br />
          .org, .tech, .co, and beyond.
        </p>
        <form class="mx-auto mt-6 max-w-xl space-y-2">
          <div class="relative">
            <input
              type="email"
              id="subcribe"
              class="h-12 w-full border-default-200 bg-white py-4 pe-16 ps-4 text-default-950 focus:border-default-200 focus:ring-0 dark:bg-default-50"
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
  styles: [],
})
export class FormComponent {}
