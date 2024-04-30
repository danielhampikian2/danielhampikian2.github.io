// scroll-directive.directive.ts
import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  Inject,
} from '@angular/core'
import { ScrollService } from './scroll.service'

@Directive({
  selector: '[appScrollClass]',
  standalone: true,
})
export class ScrollClassDirective {
  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    @Inject(ScrollService) private scrollService: ScrollService
  ) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop
    this.scrollService.updateScrollPosition(scrollPosition)
  }

  ngOnInit() {
    this.scrollService.getScrollObservable().subscribe((position) => {
      if (position > 72) {
        this.renderer.removeClass(this.el.nativeElement, 'translate-x-16')
      } else {
        this.renderer.addClass(this.el.nativeElement, 'translate-x-16')
      }
    })
  }
}
