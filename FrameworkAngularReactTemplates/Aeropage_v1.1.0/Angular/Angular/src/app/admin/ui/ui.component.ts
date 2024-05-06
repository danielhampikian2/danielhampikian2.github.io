import { Component } from '@angular/core'
import { ButtonComponent } from './button.component'
import { BreadcrumbComponent } from '@components/breadcrumb/breadcrumb.component'
import { BadgeComponent } from './badge.component'
import { AlertComponent } from './alert.component'
import { DropdownComponent } from './dropdown.component'
import { AccordionsComponent } from './accordions.component'
import { TabComponent } from './tab.component'
import { PaginationComponent } from './pagination.component'
import { ModalComponent } from './modal.component'
import { PopoverComponent } from './popover.component'
import { TooltipComponent } from './tooltip.component'
import { Components } from './data'
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterModule,
} from '@angular/router'
import { CommonModule } from '@angular/common'
import { ScrollToModule, ScrollToService } from '@nicky-lenaers/ngx-scroll-to'
import { ScrollspyDirective } from '@components/scrollspy/scrollspy.directive'
import { AdminNavDirective } from '@components/admin-nav.directive'
import { SharedSectionService } from '@core/service/shared-section.service'
@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [
    ButtonComponent,
    BreadcrumbComponent,
    BadgeComponent,
    AlertComponent,
    DropdownComponent,
    AccordionsComponent,
    TabComponent,
    PaginationComponent,
    ModalComponent,
    PopoverComponent,
    TooltipComponent,
    RouterLink,
    CommonModule,
    ScrollToModule,
    RouterModule,
    ScrollspyDirective,
    AdminNavDirective,
  ],
  providers: [ScrollToService],
  template: `
    <app-breadcrumb [pageTitle]="'Ui Components'" />
    <section class="pb-10">
      <div class="container relative">
        <div class="grid gap-6 lg:grid-cols-4">
          <div class="lg:col-span-3">
            <div class="space-y-6">
              <div
                appScrollspy
                [spiedTags]="['SECTION']"
                (sectionChange)="onSectionChange($event)"
              >
                <!-- button -->
                <section id="buttons"><app-button /></section>
                <!-- badge -->
                <section id="badges" class="scroll-mt-40">
                  <app-badge />
                </section>
                <!-- alert -->
                <section id="alerts" class="scroll-mt-40">
                  <app-alert />
                </section>
                <!-- dropdown -->
                <section id="dropdowns" class="scroll-mt-40">
                  <app-dropdown />
                </section>
                <!-- accordion -->
                <section id="accordions" class="scroll-mt-40">
                  <app-accordions />
                </section>
                <!-- tabs -->
                <section id="nav-tabs" class="scroll-mt-40">
                  <app-tab />
                </section>
                <!-- pagination -->
                <div id="pagination" class="scroll-mt-40">
                  <app-pagination />
                </div>
                <!-- modal -->
                <section id="modals" class="scroll-mt-40">
                  <app-modal />
                </section>
                <!-- popver -->
                <section id="popover" class="scroll-mt-40">
                  <app-popover />
                </section>
                <!-- tooltip -->
                <section id="tooltip" class="scroll-mt-40">
                  <app-tooltip />
                </section>
              </div>
            </div>
          </div>

          <div class="col-span-1 hidden md:block">
            <div
              class="sticky top-40 rounded-lg border border-default-200 bg-white px-4 py-6 dark:bg-default-50"
            >
              <ul class="sidebar-nav mb-0 flex flex-col gap-1 py-0" id="ui-nav">
                <li
                  class="group p-0"
                  [ngClass]="{ active: currentSection === 'buttons' }"
                >
                  <a
                    ngxScrollTo="#buttons"
                    href="javascript:void(0);"
                    class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
                    >Buttons</a
                  >
                </li>
                <li
                  class="group p-0"
                  [ngClass]="{ active: currentSection === 'badges' }"
                >
                  <a
                    ngxScrollTo="#badges"
                    href="javascript:void(0);"
                    class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
                    >Badges</a
                  >
                </li>
                <li
                  class="group p-0"
                  [ngClass]="{ active: currentSection === 'alerts' }"
                >
                  <a
                    ngxScrollTo="#alerts"
                    href="javascript:void(0);"
                    class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
                    >Alerts</a
                  >
                </li>
                <li
                  class="group p-0"
                  [ngClass]="{ active: currentSection === 'dropdowns' }"
                >
                  <a
                    ngxScrollTo="#dropdowns"
                    href="javascript:void(0);"
                    class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
                    >Dropdowns</a
                  >
                </li>
                <li
                  class="group p-0"
                  [ngClass]="{ active: currentSection === 'accordions' }"
                >
                  <a
                    ngxScrollTo="#accordions"
                    href="javascript:void(0);"
                    class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
                    >Accordions</a
                  >
                </li>
                <li
                  class="group p-0"
                  [ngClass]="{ active: currentSection === 'nav-tabs' }"
                >
                  <a
                    ngxScrollTo="#nav-tabs"
                    href="javascript:void(0);"
                    class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
                    >Nav Tabs</a
                  >
                </li>
                <li
                  class="group p-0"
                  [ngClass]="{ active: currentSection === 'pagination' }"
                >
                  <a
                    ngxScrollTo="#pagination"
                    href="javascript:void(0);"
                    class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
                    >Paginations</a
                  >
                </li>
                <li
                  class="group p-0"
                  [ngClass]="{ active: currentSection === 'modals' }"
                >
                  <a
                    ngxScrollTo="#modals"
                    href="javascript:void(0);"
                    class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
                    >Modals</a
                  >
                </li>
                <li
                  class="group p-0"
                  [ngClass]="{ active: currentSection === 'popover' }"
                >
                  <a
                    ngxScrollTo="#popover"
                    href="javascript:void(0);"
                    class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
                    >Popover</a
                  >
                </li>
                <li
                  class="group p-0"
                  [ngClass]="{ active: currentSection === 'tooltip' }"
                >
                  <a
                    ngxScrollTo="#tooltip"
                    href="javascript:void(0);"
                    class="inline-flex items-center gap-2 rounded-full border border-transparent px-4 py-1 text-base text-default-900 transition-all duration-500 hover:text-primary group-[.active]:border-primary/20 group-[.active]:bg-primary/5 group-[.active]:text-primary"
                    >Tooltip</a
                  >
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: ``,
})
export class UiComponent {
  currentSection = 'buttons'
  component = Components

  constructor(private sharedSectionService: SharedSectionService) {}

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId
  }
}
