import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <!-- Start Services -->
    <section id="services" class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >Services</span
            >
            <h2 class="my-4 text-4xl font-medium capitalize text-default-950">
              Our Services
            </h2>
            <p class="text-base">
              Lorem ipsum dummy text are usually use print and website industry.
            </p>
          </div>
        </div>
        <!-- flex End-->

        <div
          class="grid grid-cols-1 items-center divide-y divide-default-200 overflow-hidden rounded-md bg-default-100 dark:bg-default-50 lg:grid-cols-3 lg:divide-x lg:divide-y-0"
        >
          @for (item of agencyService; track $index) {
            <div class="group">
              <div class="p-8 sm:p-10">
                <span>
                  <lucide-angular
                    name="{{ item.icon }}"
                    class="size-14 text-default-950"
                  ></lucide-angular>
                </span>
                <h2 class="mb-4 mt-8 text-2xl font-medium text-default-950">
                  {{ item.title }}
                </h2>
                <p class="mb-6 text-base">
                  {{ item.content }}
                </p>
                <a href="javascript:void(0);" class="text-lg text-default-950"
                  >Read More
                  <lucide-angular
                    name="move-right"
                    class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                  ></lucide-angular>
                </a>
              </div>
            </div>
          }
          <!-- end col -->
        </div>
        <!-- grid End-->
      </div>
      <!-- container End-->
    </section>
    <!-- End Services -->
  `,
  styles: ``,
})
export class ServicesComponent {
  agencyService = [
    {
      icon: 'component',
      title: 'Developer',
      content:
        'Lorem ipsum dummy text are usually used in these sections. Lorem ipsum dummy text is used in this design',
    },
    {
      icon: 'layers',
      title: 'Digital Product Design',
      content:
        'Lorem ipsum dummy text are usually used in these sections. Lorem ipsum dummy text is used in this design',
    },
    {
      icon: 'layout-grid',
      title: 'Branding & Design',
      content:
        'Lorem ipsum dummy text are usually used in these sections. Lorem ipsum dummy text is used in this design',
    },
  ]
}
