import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-blog',
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
    <div class="mb-10 flex items-end justify-between">
      <div class="mx-auto max-w-2xl text-center">
        <span
          class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
          >Our Blog</span
        >
        <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
          Latest from our blog
        </h2>
        <p class="text-base">
          In this guide, we're going to share the essential SEO ranking factors
          you need to dominate search. By the end of this post, you'll have a
          well-optimized site
        </p>
      </div>
    </div>
    <!-- flex End-->

    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      <div class="overflow-hidden rounded-md border border-default-200">
        <div class="group">
          <img src="assets/images/landing/marketing/img-12.jpg" alt="" />

          <div class="p-6">
            <h2 class="mb-5 text-lg font-medium text-default-950">
              We craft elements to pave the way for your future success and
              growth.
            </h2>
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
      <!-- col End -->

      <div class="overflow-hidden rounded-md border border-default-200">
        <div class="group">
          <img src="assets/images/landing/marketing/img-13.jpg" alt="" />

          <div class="p-6">
            <h2 class="mb-5 text-lg font-medium text-default-950">
              Creative advertising in our life became a info noise
            </h2>
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
      <!-- col End -->

      <div class="overflow-hidden rounded-md border border-default-200">
        <div class="group">
          <img
            src="assets/images/landing/marketing/img-14.jpg"
            class="rounded"
            alt=""
          />

          <div class="p-6">
            <h2 class="mb-5 text-lg font-medium text-default-950">
              Creative advertising in our lives has evolved into a sea of
              information noise.
            </h2>
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
      <!-- col End -->
    </div>
    <!-- Grid End -->
  `,
  styles: ``,
})
export class BlogComponent {}
