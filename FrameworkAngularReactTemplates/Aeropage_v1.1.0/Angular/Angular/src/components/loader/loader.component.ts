import { CommonModule } from '@angular/common'
import { Component } from '@angular/core'

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="fixed left-0 top-0 z-70 flex w-full items-start p-0">
      <div
        class="shadow-[0_10px_40px_-10px_#fff]; top-0 h-1 w-full animate-[load_1s_normal_forwards] rounded-full bg-primary"
      ></div>
    </div>
  `,
})
export class LoaderComponent {}
