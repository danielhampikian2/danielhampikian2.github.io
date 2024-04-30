import { Component, Input } from '@angular/core'
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-breadcrumb',
  standalone: true,
  imports: [],
  template: `
    <section class="hidden md:block">
      <div class="container">
        <div
          class="my-6 rounded-lg border border-default-200 bg-white dark:bg-default-50"
        >
          <div class="flex items-center justify-between p-6">
            <h4 class="text-lg font-medium text-default-900">
              {{ pageTitle }}
            </h4>
            <div class="flex items-center justify-end gap-3">
              <div class="flex items-center gap-2">
                <a
                  href="javascript:void(0);"
                  class="text-base font-medium text-default-900 transition-all duration-200 hover:text-primary"
                  >Admin</a
                >
              </div>

              <div class="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  data-lucide="chevrons-right"
                  class="lucide lucide-chevrons-right size-5 text-default-900 rtl:rotate-180"
                >
                  <path d="m6 17 5-5-5-5"></path>
                  <path d="m13 17 5-5-5-5"></path>
                </svg>
                <a
                  href="javascript:void(0);"
                  class="text-base font-medium text-default-900"
                  >{{ pageTitle }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class BreadcrumbComponent {
  @Input() pageTitle!: string
  constructor(private titleService: Title) {}

  ngOnInit() {
    if (this.pageTitle !== undefined) {
      const fullTitle = `${this.pageTitle} | AeroPage Angular - Tailwind CSS Multipurpose One Page Landing Template`
      this.titleService.setTitle(fullTitle)
    }
  }
}
