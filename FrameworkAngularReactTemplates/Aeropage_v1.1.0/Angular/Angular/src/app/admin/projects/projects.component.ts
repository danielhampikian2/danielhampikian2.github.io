import { Component } from '@angular/core'
import { projects } from './data'
import { CommonModule } from '@angular/common'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, BreadcrumbComponent],
  template: `
    <app-breadcrumb [pageTitle]="'Projects'" />
    <section>
      <div class="container">
        <div class="my-6 space-y-6">
          <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            @for (item of project; track $index) {
              <div
                class="overflow-hidden rounded-md border border-default-200 bg-white dark:bg-default-50"
              >
                <div
                  class="flex items-center justify-between border-b border-default-200 px-4 py-3"
                >
                  <h5 class="text-lg text-default-900">{{ item.title }}</h5>
                  <div
                    class="rounded-md  px-1.5 py-1 text-xs font-medium text-white"
                    [ngClass]="{
                      'bg-teal-500':
                        item.status === 'Completed' ||
                        item.status === 'Frontend Completed',
                      'bg-amber-500': item.status === 'Pending',
                      'bg-primary': item.status === 'In Progress'
                    }"
                    role="alert"
                  >
                    <span>{{ item.status }}</span>
                  </div>
                </div>
                @for (data of item.items; track $index) {
                  <div class="flex flex-col">
                    <div class="px-6 py-3">
                      <h5 class="my-2">
                        <a
                          href="javascript:void(0);"
                          class="text-default-900"
                          >{{ data.name }}</a
                        >
                      </h5>
                      <p class="mb-9 text-sm text-default-500">
                        {{ data.description }}
                      </p>

                      <div class="flex -space-x-2">
                        @for (image of data.images; track $index) {
                          <a href="javascript: void(0);">
                            <img
                              class="inline-block size-12 rounded-full border-2 border-default-50"
                              src="{{ image }}"
                              alt="Image Description"
                            />
                          </a>
                        }
                        <a href="javascript: void(0);">
                          <div class="relative inline-flex">
                            <button
                              class="inline-flex size-12 items-center justify-center rounded-full border-2 border-white bg-default-200 align-middle text-sm font-medium text-default-700 shadow-sm transition-all hover:bg-default-300 dark:border-default-50"
                            >
                              <span class="font-medium leading-none">2+</span>
                            </button>
                          </div>
                        </a>
                      </div>
                    </div>

                    <div class="border-t border-default-200 p-5">
                      <div class="grid gap-4 lg:grid-cols-2">
                        <div class="flex items-center justify-between gap-2">
                          <a href="javascript:void(0);" class="text-sm">
                            <i class="mgc_calendar_line me-2 text-lg"></i>
                            <span class="align-text-bottom">{{
                              data.dates.calendar
                            }}</span>
                          </a>

                          <a href="javascript:void(0);" class="text-sm">
                            <i class="mgc_align_justify_line me-2 text-lg"></i>
                            <span class="align-text-bottom">{{
                              data.dates.justify
                            }}</span>
                          </a>

                          <a href="javascript:void(0);" class="text-sm">
                            <i class="mgc_comment_line me-2 text-lg"></i>
                            <span class="align-text-bottom">{{
                              data.dates.comment
                            }}</span>
                          </a>
                        </div>
                        <div class="flex items-center gap-2">
                          <div class="h-1.5 w-full rounded-full bg-default-200">
                            <div
                              class="h-1.5 w-2/3 rounded-full {{
                                data.progress.barColor
                              }}"
                            ></div>
                          </div>
                          <span>{{ data.progress.percentage }}%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                }
              </div>
            }
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class ProjectsComponent {
  project = projects
}
