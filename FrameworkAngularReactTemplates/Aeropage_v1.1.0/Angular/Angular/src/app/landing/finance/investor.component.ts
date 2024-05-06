import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-investor',
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
    <section class="py-10 lg:py-20">
      <div class="container">
        <div class="grid items-center gap-6 lg:grid-cols-2">
          <div>
            <img
              src="assets/images/landing/finance/img-9.png"
              class="h-full w-full rounded-lg"
              alt=""
            />
          </div>

          <div>
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Investor ready reporting</span
            >
            <h2 class="mt-4 text-4xl/tight font-medium text-default-950">
              Streamline Data Integrations: Simplify finance with Vault
            </h2>
            <ul
              role="list"
              class="-ms-3 mt-6 space-y-2 ps-6 text-sm text-default-700"
            >
              <li class="flex items-center gap-3">
                <lucide-angular
                  name="circle"
                  [class]="
                    'inline-block size-2 shrink fill-primary text-primary'
                  "
                ></lucide-angular>
                <span class="grow text-base font-medium"
                  >Demonstrate your firm grasp of business finances by having
                  instant access.</span
                >
              </li>
              <li class="flex items-center gap-3">
                <lucide-angular
                  name="circle"
                  [class]="
                    'inline-block size-2 shrink fill-primary text-primary'
                  "
                ></lucide-angular>
                <span class="grow text-base font-medium"
                  >Effortlessly collaborate with investors by sharing live
                  reports and models.</span
                >
              </li>
              <li class="flex items-center gap-3">
                <lucide-angular
                  name="circle"
                  [class]="
                    'inline-block size-2 shrink fill-primary text-primary'
                  "
                ></lucide-angular>
                <span class="grow text-base font-medium"
                  >Simplify investor collaboration by seamlessly sharing
                  real-time Sheets.</span
                >
              </li>
            </ul>
            <!-- End list -->
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
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class InvestorComponent {}
