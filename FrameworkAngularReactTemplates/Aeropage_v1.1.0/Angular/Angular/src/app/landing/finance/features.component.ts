import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-features',
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
      <span
        class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
        >Highlighted Projects</span
      >
      <h2 class="mt-4 text-4xl/tight font-medium text-default-950">
        Streamline Data Integrations: Simplify finance with Vault
      </h2>
      <p class="mt-5 text-base text-default-900">
        Save time on financial tasks by automating them with Vault. Consectetur
        adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </p>
      <div class="group mt-5">
        <a
          href="javascript:void(0);"
          class="inline-flex items-center justify-center gap-2 rounded-full bg-primary/20 px-4 py-2 text-sm text-primary transition-all duration-200 hover:bg-primary hover:text-white"
          >Read More
          <lucide-angular
            name="move-right"
            class="inline-block size-6"
          ></lucide-angular>
        </a>
      </div>
    </div>

    <div>
      <img
        src="assets/images/landing/finance/img-8.png"
        class="h-full w-full rounded-lg"
        alt=""
      />
    </div>
  </div>`,
  styles: ``,
})
export class FeatureComponent {}
