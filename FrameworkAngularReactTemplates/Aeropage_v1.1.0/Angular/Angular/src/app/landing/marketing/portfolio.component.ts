import { Component } from '@angular/core'
import { PortfolioComponent } from '@components/portfolio/portfolio.component'
import { SwiperDirective } from '@components/swiper-directive.component'

@Component({
  selector: 'app-portfoliomarket',
  standalone: true,
  imports: [PortfolioComponent, SwiperDirective],
  template: ` <app-portfolio [Swiper]="swiperImage" />`,
  styles: ``,
})
export class PortfoliomarketComponent {
  // swiper image
  swiperImage = [
    {
      image: 'assets/images/landing/creative/img-2.jpg',
      title: 'Brand',
      content: 'Coder Studio',
    },
    {
      image: 'assets/images/landing/creative/img-4.jpg',
      title: 'Brand',
      content: 'Coder Studio',
    },
    {
      image: 'assets/images/landing/creative/img-5.jpg',
      title: 'Brand',
      content: 'Coder Studio',
    },
  ]
}
