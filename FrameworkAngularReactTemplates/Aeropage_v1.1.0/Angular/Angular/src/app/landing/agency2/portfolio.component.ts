import { Component } from '@angular/core'
import { PortfolioComponent } from '@components/portfolio/portfolio.component'

@Component({
  selector: 'app-portfolios',
  standalone: true,
  imports: [PortfolioComponent],
  template: ` <app-portfolio [Swiper]="swiperImage" /> `,
  styles: ``,
})
export class PortfoliosComponent {
  // swiperImage
  swiperImage = [
    {
      image: 'assets/images/landing/agency-2/img-1.jpg',
      title: 'Web Design',
      content: 'Branding Process',
    },
    {
      image: 'assets/images/landing/agency-2/img-3.jpg',
      title: 'Web Design',
      content: 'Digital Platform',
    },
    {
      image: 'assets/images/landing/agency-2/img-2.jpg',
      title: 'Brand',
      content: 'Coder Studio',
    },
    {
      image: 'assets/images/landing/agency-2/img-1.jpg',
      title: 'Web Design',
      content: 'New Gadgets',
    },
  ]
}
