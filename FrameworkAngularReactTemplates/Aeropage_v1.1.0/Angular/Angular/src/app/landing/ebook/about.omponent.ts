import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [LucideAngularModule],
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
  template: ` <!-- Hero Section Start -->
    <div class="grid items-center gap-6 lg:grid-cols-2">
      <div>
        <img
          src="assets/images/landing/ebook/img-15.jpg"
          class="mx-auto h-[500px] rounded-xl"
          alt=""
        />
      </div>

      <div>
        <span
          class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >our About</span
        >
        <h2 class="mt-5 text-4xl font-medium text-default-950">
          About the Alchemist
        </h2>
        <p class="mt-4 text-base">
          Lorem ipsum is simply Dummy text of the Printing and typesetting
          industry. lorem is simply dummy text
        </p>

        <ul role="list" class="my-6 space-y-2">
          <li class="flex items-center gap-2">
            <!-- svg icon -->
            <lucide-angular
              name="dot"
              class="inline-block size-10 text-primary"
            ></lucide-angular>
            <p class="text-base">
              Lorem ipsum is smiply dummy text of the printing.
            </p>
          </li>
          <li class="flex items-center gap-2">
            <!-- svg icon -->
            <lucide-angular
              name="dot"
              class="inline-block size-10 text-primary"
            ></lucide-angular>
            <p class="text-base">
              Lorem ipsum is smiply dummy text of the printing and lorem
              <br />
              Donec posuere vulputate.
            </p>
          </li>
          <li class="flex items-center gap-2">
            <!-- svg icon -->
            <lucide-angular
              name="dot"
              class="inline-block size-10 text-primary"
            ></lucide-angular>
            <p class="text-base">
              Aenean at bibendum enim. In auctor consectetur urna.
            </p>
          </li>
          <li class="flex items-center gap-2">
            <!-- svg icon -->
            <lucide-angular
              name="dot"
              class="inline-block size-10 text-primary"
            ></lucide-angular>
            <p class="text-base">
              Lorem ipsum is smiply dummy text of the printing.
            </p>
          </li>
        </ul>
        <!-- End list -->

        <a
          href="javascript:void(0);"
          class="inline-flex items-center justify-center gap-2 rounded-md bg-primary/90 px-8 py-3 text-base text-white transition-all duration-500 hover:bg-primary"
          >Read More
          <lucide-angular name="move-right" class="size-6"></lucide-angular>
        </a>
      </div>
    </div>`,
  styles: ``,
})
export class AboutComponent {}
