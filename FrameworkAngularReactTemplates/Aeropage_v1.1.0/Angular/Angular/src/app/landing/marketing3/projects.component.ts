import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <!-- Start About -->
    <section id="projects" class="overflow-hidden py-10">
      <div class="container">
        <div
          class="relative overflow-hidden rounded-3xl bg-white shadow-[rgba(17,_17,_26,_0.1)_0px_0px_24px] dark:bg-default-50"
        >
          <div class="grid items-center gap-6 lg:grid-cols-2">
            <div class="relative p-6 text-center">
              <span
                class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
                >Highlighted Projects</span
              >
              <h2 class="mt-4 text-3xl font-medium text-default-950">
                Innovative Design Solutions 💡
              </h2>
              <p class="mb-8 mt-5 text-base">
                Customize your design using a variety of theme options in the
                WordPress Customizer and witness instant changes.
              </p>
              <a
                href="javascript:void(0);"
                class="inline-flex items-center justify-center gap-2 rounded-md bg-primary px-6 py-2 text-white transition-all duration-300 hover:bg-primary-700"
                >Read More
                <lucide-angular
                  name="move-right"
                  class="size-6"
                ></lucide-angular>
              </a>
            </div>
            <img
              src="assets/images/landing/marketing-3/img-2.jpg"
              class="h-full w-full"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    <!-- End About -->
  `,
  styles: ``,
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class ProjectsComponent {}
