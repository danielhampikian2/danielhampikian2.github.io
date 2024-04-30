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
    <!-- Start Blog -->
    <section id="blog" class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Our Blog</span
            >
            <h2 class="my-4 text-3xl font-medium capitalize text-default-950">
              Read the latest news.
            </h2>
          </div>
        </div>
        <!-- flex End -->

        <div class="grid gap-6 xl:grid-cols-3">
          <div class="overflow-hidden rounded-lg border border-default-200">
            <div class="flex flex-col">
              <div class="">
                <img
                  src="assets/images/landing/agency-2/img-1.jpg"
                  class="h-full max-w-full"
                  alt=""
                />
              </div>

              <div class="group p-6">
                <h3 class="mb-4 text-xl font-medium text-default-950">
                  Free advertising you online business.
                </h3>
                <p class="mb-5 mt-3 text-base">
                  Content king that means bringing and strategic approach.
                </p>
                <a
                  href="javascript:void(0);"
                  class="text-lg font-medium text-default-950"
                  >Read More
                  <lucide-angular
                    name="move-right"
                    class="duration-400 inline-block size-5 opacity-0 transition-all will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                  ></lucide-angular>
                </a>
              </div>
            </div>
            <!-- grid End -->
          </div>
          <!-- col End -->

          <div class="overflow-hidden rounded-lg border border-default-200">
            <div class="flex flex-col">
              <div class="">
                <img
                  src="assets/images/landing/agency-2/img-2.jpg"
                  class="h-full max-w-full"
                  alt=""
                />
              </div>

              <div class="group p-6">
                <h3 class="mb-4 text-xl font-medium text-default-950">
                  Investment monitor top 2023
                </h3>
                <p class="mb-5 mt-3 text-base">
                  We are thrilled to the Investment Top 2023, recognizing the
                  excellence and innovation.
                </p>
                <a
                  href="javascript:void(0);"
                  class="text-lg font-medium text-default-950"
                  >Read More
                  <lucide-angular
                    name="move-right"
                    class="duration-400 inline-block size-5 opacity-0 transition-all will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                  ></lucide-angular>
                </a>
              </div>
            </div>
            <!-- grid End -->
          </div>
          <!-- col End -->

          <div class="overflow-hidden rounded-lg border border-default-200">
            <div class="flex flex-col">
              <div class="">
                <img
                  src="assets/images/landing/agency-2/img-3.jpg"
                  class="h-full max-w-full"
                  alt=""
                />
              </div>

              <div class="group p-6">
                <h3 class="mb-4 text-xl font-medium text-default-950">
                  Advancing Innovation and Collaboration
                </h3>
                <p class="mb-5 mt-3 text-base">
                  Join us for a transformative event focused on Advancing
                  Innovation and Collaboration.
                </p>
                <a
                  href="javascript:void(0);"
                  class="text-lg font-medium text-default-950"
                  >Read More
                  <lucide-angular
                    name="move-right"
                    class="duration-400 inline-block size-5 opacity-0 transition-all will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                  ></lucide-angular>
                </a>
              </div>
            </div>
            <!-- grid End -->
          </div>
          <!-- col End -->
        </div>
        <!-- Grid End -->
      </div>
      <!-- container End -->
    </section>
    <!-- End Blog -->
  `,
  styles: ``,
})
export class BlogComponent {}
