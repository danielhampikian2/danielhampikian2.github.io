import { CommonModule } from '@angular/common'
import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core'
import {
  LUCIDE_ICONS,
  LucideAngularModule,
  LucideIconProvider,
  icons,
} from 'lucide-angular'
import { ScrollClassDirective } from '../scroll/scroll-directive.component'

@Component({
  selector: 'app-mode-switch',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, ScrollClassDirective],
  templateUrl: './mode-switch.component.html',
  styles: ``,
  providers: [
    {
      provide: LUCIDE_ICONS,
      multi: true,
      useValue: new LucideIconProvider(icons),
    },
  ],
})
export class ModeSwitchComponent {
  isDarkTheme: boolean = false
  mybutton!: string
  @ViewChild('homenavbar') navbarRef!: ElementRef

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) {}

  ngOnInit() {
    this.renderer.addClass(document.documentElement, 'light')
  }

  // mode switch
  toggleTheme() {
    this.isDarkTheme = !this.isDarkTheme
    if (this.isDarkTheme) {
      this.renderer.addClass(document.documentElement, 'dark')
    } else {
      this.renderer.removeClass(document.documentElement, 'dark')
    }
  }

  // topFunction
  topFunction() {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }
}
