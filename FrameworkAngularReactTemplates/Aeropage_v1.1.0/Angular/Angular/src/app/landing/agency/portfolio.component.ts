import { Component } from '@angular/core'
import { PortfolioComponent } from '@components/portfolio/portfolio.component'

export type swiperImage = {
  image: string
  title: string
  content: string
}

@Component({
  selector: 'app-portfolios',
  standalone: true,
  imports: [PortfolioComponent],
  template: ` <app-portfolio [Swiper]="swiperImage" /> `,
  styles: ``,
})
export class PortfoliosComponent {
  // swiper image
  swiperImage: swiperImage[] = [
    {
      image: 'assets/images/landing/agency/img-6.jpg',
      title: 'Web Design',
      content: 'Branding Process',
    },
    {
      image: 'assets/images/landing/agency/img-7.jpg',
      title: 'Web Design',
      content: 'Digital Platform',
    },
    {
      image: 'assets/images/landing/agency/img-8.jpg',
      title: 'Brand',
      content: 'Coder Studio',
    },
    {
      image: 'assets/images/landing/agency/img-9.jpg',
      title: 'Web Design',
      content: 'New Gadgets',
    },
  ]
}
