import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-security',
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
    <div class="grid items-center gap-6 md:grid-cols-2">
      <div>
        <img src="assets/images/landing/hosting/5.svg" alt="" />
      </div>
      <!-- col End -->
      <div>
        <span class="text-sm uppercase text-default-950">Trusted security</span>
        <h2 class="my-5 text-3xl font-medium text-default-950 md:text-4xl">
          Reliable security right from the start.
        </h2>
        <p class="mb-5 text-base text-default-950">
          Lorem ipsum originated from the scrambled, Latin text of Cicero's
          1st-century BC work, De Finibus, and has since become ubiquitous lorem
          ipsum.
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
    </div>
    <!-- grid End -->
  `,
  styles: ``,
})
export class SecurityComponent {}
