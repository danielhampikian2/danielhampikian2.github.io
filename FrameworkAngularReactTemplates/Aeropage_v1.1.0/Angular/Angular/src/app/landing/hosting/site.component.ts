import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-site',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: ` <div class="grid items-center gap-6 md:grid-cols-2">
    <div>
      <span class="text-sm uppercase text-default-950">Site transfer</span>
      <h2 class="my-5 text-3xl font-medium text-default-950 md:text-4xl">
        Seamless migration with lightning speed and zero downtime.
      </h2>
      <p class="mb-5 text-base text-default-950">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <a
        href="javascript:void(0);"
        class="group relative inline-flex items-center gap-2 text-xl text-primary"
      >
        <span
          class="absolute -bottom-0 h-px w-7/12 rounded bg-primary/80 transition-all duration-500 group-hover:w-full"
        ></span>
        Discover more by clicking here
        <lucide-angular name="move-right" class="size-5"></lucide-angular>
      </a>
    </div>
    <!-- col End -->

    <div>
      <img src="assets/images/landing/hosting/3.svg" class="h-96" alt="" />
    </div>
    <!-- col End -->
  </div>`,
  styles: ``,
})
export class SiteComponent {}
