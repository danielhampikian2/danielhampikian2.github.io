import { CommonModule } from '@angular/common'
import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- marquee.component.html -->
    <div
      [ngClass]="parentClass"
      class="relative m-auto flex gap-28 overflow-hidden"
    >
      <div
        [ngClass]="childClass"
        class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around"
      >
        @for (item of marqueeContent; track $index) {
          <h2 [ngClass]="customClass">
            {{ item }}
          </h2>
        }
      </div>
      <div
        aria-hidden="true"
        [ngClass]="childClass"
        class="marquee__group flex min-w-full flex-shrink-0 items-center justify-around"
      >
        @for (item of marqueeContent; track $index) {
          <h2 [ngClass]="customClass">
            {{ item }}
          </h2>
        }
      </div>
    </div>
  `,
  styles: ``,
})
export class MarqueeComponent {
  @Input() marqueeContent: string[] = []
  @Input() customClass: string = ''
  @Input() parentClass: string = ''
  @Input() childClass: string = ''
}
