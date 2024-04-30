import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-marquee2',
  standalone: true,
  imports: [],
  template: `
    <div
      class="relative m-auto flex gap-28 overflow-hidden border border-default-200 {{
        customClass
      }}"
    >
      <div
        class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28"
      >
        @for (item of marqueeContent; track $index) {
          <div class="{{ parentClass }}">
            <h2 class="{{ childClass }}">
              {{ item }}
            </h2>
          </div>
        }
        <!-- marquee__group End-->
      </div>
      <div
        aria-hidden="true"
        class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around gap-28"
      >
        @for (item of marqueeContent; track $index) {
          <div class="{{ parentClass }}">
            <h2 class="{{ childClass }}">
              {{ item }}
            </h2>
          </div>
        }
      </div>
      <!-- marquee__group End-->
    </div>
    <!-- flex End -->
  `,
  styles: ``,
})
export class Marquee2Component {
  @Input() marqueeContent: string[] = []
  @Input() customClass: string = ''
  @Input() parentClass: string = ''
  @Input() childClass: string = ''
}
