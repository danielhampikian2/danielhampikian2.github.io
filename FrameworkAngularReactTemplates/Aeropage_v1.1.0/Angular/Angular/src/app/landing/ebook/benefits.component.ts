import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-benefit',
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
    <div class="mx-auto max-w-2xl text-center">
      <span
        class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
        >Benefits</span
      >
      <h2 class="my-5 text-4xl font-medium text-default-950 md:text-4xl/tight">
        Discover your Benefits
      </h2>
      <p class="mb-10 text-base">
        Plus, enjoy the convenience of offline access to our ebooks, allowing
        you to read at your convenience, anytime, and anywhere.
      </p>
    </div>

    <div class="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-3">
      <div class="space-y-6">
        <div>
          <div
            class="group rounded-xl bg-white p-6 drop-shadow-md dark:bg-default-50"
          >
            <div
              class="flex size-14 items-center justify-center rounded-full bg-primary/10"
            >
              <lucide-angular
                name="clapperboard"
                class="size-7 text-primary"
              ></lucide-angular>
            </div>
            <h2 class="mt-5 text-2xl font-medium text-default-950">
              Cost-Effective Option
            </h2>
            <p class="mt-3 text-base">
              Ebooks typically come at a lower price point compared to printed
              books, making them accessible to a broader audience of readers.
            </p>
            <div class="mt-5">
              <a
                href="javascript:void(0);"
                class="text-lg font-medium text-default-900"
                >Read More
                <lucide-angular
                  name="move-right"
                  class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                ></lucide-angular>
              </a>
            </div>
          </div>
        </div>
        <!-- End col -->

        <div>
          <div
            class="group rounded-xl bg-white p-6 drop-shadow-md dark:bg-default-50"
          >
            <div
              class="flex size-14 items-center justify-center rounded-full bg-primary/10"
            >
              <lucide-angular
                name="shield"
                class="size-7 text-primary"
              ></lucide-angular>
            </div>
            <h2 class="mt-5 text-2xl font-medium text-default-950">
              Eco-Conscious Choice
            </h2>
            <p class="mt-3 text-base">
              Ebooks are environmentally friendly as they are digital,
              eliminating the need for paper, ink, and sustainable option
              compared to print books.
            </p>
            <div class="mt-5">
              <a
                href="javascript:void(0);"
                class="text-lg font-medium text-default-900"
                >Read More
                <lucide-angular
                  name="move-right"
                  class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                ></lucide-angular>
              </a>
            </div>
          </div>
        </div>
        <!-- End col -->
      </div>

      <div class="rounded-xl bg-white drop-shadow-md">
        <img
          src="assets/images/landing/ebook/img-1.jpg"
          class="h-full w-full rounded-xl"
          alt=""
        />
      </div>

      <div class="space-y-6">
        <div>
          <div
            class="group rounded-xl bg-white p-6 drop-shadow-md dark:bg-default-50"
          >
            <div
              class="flex size-14 items-center justify-center rounded-full bg-primary/10"
            >
              <lucide-angular
                name="layers"
                class="size-7 text-primary"
              ></lucide-angular>
            </div>
            <h2 class="mt-5 text-2xl font-medium text-default-950">
              Enhanced Visibility
            </h2>
            <p class="mt-3 text-base">
              Ebooks can be effortlessly searched and shared across the
              internet, readers and enabling readers to discover new books more
              readily.
            </p>
            <div class="mt-5">
              <a
                href="javascript:void(0);"
                class="text-lg font-medium text-default-900"
                >Read More
                <lucide-angular
                  name="move-right"
                  class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                ></lucide-angular>
              </a>
            </div>
          </div>
        </div>
        <!-- End col -->

        <div>
          <div
            class="group rounded-xl bg-white p-6 drop-shadow-md dark:bg-default-50"
          >
            <div
              class="flex size-14 items-center justify-center rounded-full bg-primary/10"
            >
              <lucide-angular
                name="user-round-check"
                class="size-7 text-primary"
              ></lucide-angular>
            </div>
            <h2 class="mt-5 text-2xl font-medium text-default-950">
              Enhanced Convenience
            </h2>
            <p class="mt-3 text-base">
              Ebooks have the capacity to incorporate interactive features like
              videos, audio, and elevating the overall reading experience.
            </p>
            <div class="mt-5">
              <a
                href="javascript:void(0);"
                class="text-lg font-medium text-default-900"
                >Read More
                <lucide-angular
                  name="move-right"
                  class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                ></lucide-angular>
              </a>
            </div>
          </div>
        </div>
        <!-- End col -->
      </div>
    </div>

    <div class="mt-10 flex justify-center">
      <a
        href="javascript:void(0);"
        class="inline-flex items-center justify-center gap-2 rounded-md bg-primary/90 px-8 py-3 text-base text-white transition-all duration-500 hover:bg-primary"
        >Read More
        <lucide-angular name="move-right" class="size-6"></lucide-angular>
      </a>
    </div>
  `,

  styles: ``,
})
export class BenefitsComponent {}
