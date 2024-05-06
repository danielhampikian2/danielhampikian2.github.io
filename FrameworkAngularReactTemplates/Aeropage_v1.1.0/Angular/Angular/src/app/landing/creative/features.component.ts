import { Component } from '@angular/core'
import { LucideAngularModule } from 'lucide-angular'

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [LucideAngularModule],
  template: `
    <!-- Start features -->
    <section id="features" class="py-10 lg:py-20">
      <div class="container">
        <div class="mb-10 flex items-end justify-between">
          <div class="mx-auto max-w-2xl text-center">
            <span
              class="rounded-md border border-primary bg-primary/20 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary"
              >FEATUREO FEATURES</span
            >
            <h2 class="my-4 text-4xl font-medium capitalize text-default-950">
              Our Features
            </h2>
          </div>
        </div>
        <!-- flex End-->
        <div
          class="grid grid-cols-1 items-center overflow-hidden rounded-md border border-default-200 md:grid-cols-2 xl:grid-cols-3"
        >
          @for (item of creativeservice; track $index) {
            <div class="{{ item.class }}">
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
                <p class="mb-6 text-base text-default-600">
                  {{ item.content }}
                </p>
                <a
                  href="javascript:void(0);"
                  class="text-lg font-medium text-default-950"
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
    <!-- End features -->
  `,
  styles: ``,
})
export class FeaturesComponent {
  creativeservice = [
    {
      class: 'group h-full border-b border-default-200',
      icon: 'component',
      title: 'Developer',
      content:
        'Lorem ipsum dummy text are usually used in these sections. Lorem ipsum dummy text is used in this design',
    },
    {
      class: 'group h-full border-b border-default-200 md:border-s',
      icon: 'monitor',
      title: 'Web Design',
      content:
        'In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.',
    },
    {
      class: 'group h-full border-b border-default-200 xl:border-s',
      icon: 'layers',
      title: 'Digital Product Design',
      content:
        'Lorem ipsum dummy text are usually used in these sections. Lorem ipsum dummy text is used in this design',
    },
    {
      class: 'group h-full border-b border-s border-default-200 xl:border-0',
      icon: 'layout-grid',
      title: 'Branding & Design',
      content:
        'Lorem ipsum dummy text are usually used in these sections. Lorem ipsum dummy text is used in this design',
    },
    {
      class:
        'group h-full border-b border-default-200 md:border-b-0 xl:border-s',
      icon: 'figma',
      title: 'Ui/Ux & Design',
      content:
        'Maecenas malesuada. Praesent congue erat at massa. Sed cursus turpis vitae tortor. Donec posuere vulputate arcu.',
    },
    {
      class: 'group h-full border-default-200 md:border-s',
      icon: 'paintbrush',
      title: 'Branding & Design',
      content:
        'Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis lacus.',
    },
  ]
}
