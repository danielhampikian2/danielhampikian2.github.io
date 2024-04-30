import { Component } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  template: `<footer class="relative border-t border-default-200">
    <div class="container relative">
      <p class="py-6 text-center font-medium text-default-900">
        {{ year }}
        © AeroPage. Crafted and Coded with
        <span class="text-red-500">❤️</span> by
        <a
          class="text-primary-700"
          href="https://coderthemes.com/"
          target="_blank"
          >Coderthemes</a
        >
      </p>
    </div>
  </footer>`,
  styles: ``,
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class FooterComponent {
  year = new Date().getFullYear()
}
