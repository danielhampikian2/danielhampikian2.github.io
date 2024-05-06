import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { WorkFilterType, workFilter } from './data'

@Component({
  selector: 'app-work',
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
    <!-- ======= Projects start ======= -->
    <section id="work" class="py-20">
      <div class="container">
        <div class="mb-10">
          <div class="flex flex-wrap items-center justify-between gap-6">
            <h2 class="text-4xl font-medium text-default-950">Works</h2>

            <div class="filters-group-wrap text-center">
              <div class="filters-group">
                <div
                  class="filter-options flex list-none flex-wrap justify-center gap-4"
                >
                  <a
                    href="javascript:void(0);"
                    [class.active]="selectedFilter === ''"
                    data-group="all"
                    (click)="filterItems('')"
                    >All</a
                  >
                  <a
                    href="javascript:void(0);"
                    [class.active]="selectedFilter === 'webDesign'"
                    data-group="web design"
                    (click)="filterItems('webDesign')"
                    >Web Design</a
                  >
                  <a
                    href="javascript:void(0);"
                    [class.active]="selectedFilter === 'graphicDesign'"
                    data-group="graphic design"
                    (click)="filterItems('graphicDesign')"
                    >Graphic Design</a
                  >
                  <a
                    href="javascript:void(0);"
                    [class.active]="selectedFilter === 'illustrator'"
                    data-group="illustrator"
                    (click)="filterItems('illustrator')"
                    >Illustrator</a
                  >
                  <a
                    href="javascript:void(0);"
                    [class.active]="selectedFilter === 'photography'"
                    data-group="photography"
                    (click)="filterItems('photography')"
                    >Photography</a
                  >
                </div>
              </div>
            </div>
          </div>
          <!-- End flex -->
        </div>

        <div
          id="gallery-wrapper"
          class="flex items-center"
          style="flex-wrap: wrap;"
        >
          @for (item of workFilter; track $index) {
            <div
              class="picture-item w-full p-3 xl:w-1/2"
              data-groups='["web design"]'
            >
              <div
                class="group space-y-6 overflow-hidden rounded-lg bg-default-200 p-3"
              >
                <div class="relative overflow-hidden rounded-lg">
                  <img
                    class="ransition mx-auto h-full w-full object-cover object-top duration-500 group-hover:scale-105"
                    src="{{ item.src }}"
                    alt="woman"
                    loading="lazy"
                    width="640"
                    height="805"
                  />
                  <div class="absolute inset-0">
                    <div class="h-full w-full rounded bg-black/60">
                      <div class="flex h-full items-end p-4">
                        <div class="overflow-hidden">
                          <p class="mb-2 font-medium text-white">
                            {{ item.date }}
                          </p>
                          <h5 class="mb-2 text-3xl font-medium text-white">
                            {{ item.title }}
                          </h5>
                          <p
                            class="mb-8 truncate whitespace-nowrap text-base text-white/80 md:whitespace-normal"
                          >
                            {{ item.description }}
                          </p>
                          <a
                            href="javascript:void(0);"
                            class="group text-lg font-medium text-white"
                            >Read More
                            <lucide-angular
                              name="move-right"
                              class="inline-block size-6 opacity-0 transition-all duration-500 will-change-transform group-hover:translate-x-2 group-hover:opacity-100"
                            ></lucide-angular>
                          </a>
                        </div>
                      </div>
                      <!-- End flex -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
        <!-- Grid End -->
      </div>
      <!-- Container End -->
    </section>
    <!-- =======   end ======= -->
  `,
  styles: ``,
})
export class WorkComponent {
  workFilter = workFilter
  allworkFilter = workFilter
  selectedFilter: string = ''

  ngOnInit() {
    this.allworkFilter = [...this.workFilter]
  }

  // Filter items category
  filterItems(category: string) {
    this.selectedFilter = category
    if (category) {
      this.workFilter = this.allworkFilter.filter((item: any) => {
        return item.category.includes(category)
      })
    } else {
      this.workFilter = this.allworkFilter
    }
  }
}
